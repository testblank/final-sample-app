import { useEffect, useState } from 'react';

const makeInitialList = list => {
	const initailCheckedList = [];
	const allIMainds = [];
	const requiredIds = [];
	const hasSubObj = {};
	let allSubIds = [];
	let checkAllId = -1;

	for (const key in list) {
		if (Object.hasOwnProperty.call(list, key)) {
			const element = list[key];

			element.required && requiredIds.push(Number(element.id));

			element.checked && initailCheckedList.push(Number(element.id));

			if (element.subIds) {
				hasSubObj[element.id] = element.subIds;
				allSubIds = allSubIds.concat(element.subIds);
			}

			if (element.checkAll) {
				checkAllId = element.id;
			} else {
				allIMainds.push(Number(element.id));
			}
		}
	}

	return {
		initailCheckedList,
		allIMainds,
		requiredIds,
		hasSubObj,
		allSubIds,
		checkAllId,
	};
};

const useCheckTree = list => {
	const {
		initailCheckedList = [],
		allIMainds = [],
		requiredIds = [],
		hasSubObj = {},
		allSubIds = [],
		checkAllId,
	} = makeInitialList(list);

	const [checkedIds, setCheckedIds] = useState(initailCheckedList);
	const [requiredChecked, setRequiredChecked] = useState(false);

	const getMainCheckBox = id => {
		let mainId = -1;

		for (const key in hasSubObj) {
			if (Object.hasOwnProperty.call(hasSubObj, key)) {
				const element = hasSubObj[key];
				const idx = element.indexOf(id);

				if (idx !== -1) {
					mainId = Number(key);
				}
			}
		}
		return mainId;
	};

	const deleteMainCheckBox = id => {
		// mainId: subCheckBox를 가지고있는 부모 checkBox의 id.
		const mainId = getMainCheckBox(id);
		const subList = hasSubObj[mainId];
		const filtered = subList.filter(id => checkedIds.includes(id));

		if (filtered.length === 1 && filtered[0] === id) {
			return mainId;
		}
		return false;
	};

	const deleteDuplicate = list => list.filter((id, idx) => list.indexOf(id) === idx);

	const onChange = e => {
		// 전체 선택 일 때
		if (Number(e.target.id) === checkAllId) {
			// 전체선택
			if (e.target.checked) {
				const newList = allIMainds.concat(checkAllId).concat(allSubIds);

				setCheckedIds(newList);
			}
			// 전체선택 해제
			else {
				setCheckedIds([]);
			}
		}
		// 전체 선택이 아닌 checkbox 일 때
		else {
			// sub checkbox가 있는 checkbox 클릭 시
			if (hasSubObj[Number(e.target.id)]) {
				// true면 sub checkBox의 id들도 checkedIds state에 담아 줍니다.
				if (e.target.checked) {
					const newList = checkedIds.concat(Number(e.target.id)).concat(hasSubObj[Number(e.target.id)]);

					setCheckedIds(newList);
				} else {
					// false면 sub checkBox의 id들을 checkedIds state에서 뺴줍니다.
					const newList = checkedIds
						.filter(id => id !== Number(e.target.id))
						.filter(id => !hasSubObj[Number(e.target.id)].includes(id));

					setCheckedIds(newList);
				}
			} else {
				// subCheckBox 클릭 시
				if (allSubIds.indexOf(Number(e.target.id)) !== -1) {
					// true면  getMainCheckBox로 해당 sub checkbox를 가지고있는 main checkbox를 checkedIds state에 담아줍니다.
					if (e.target.checked) {
						const id = getMainCheckBox(Number(e.target.id));
						const newList = checkedIds.concat(Number(e.target.id)).concat(id);

						setCheckedIds(deleteDuplicate(newList));
					} else {
						//  false 일 때는 deleteMainCheckBox로 해당 sub checkbox를 가지고있는 main checkbox를 checkedIds state에서 제거 합니다.
						let newList = checkedIds.filter(id => Number(id) !== Number(e.target.id));

						const delMainId = deleteMainCheckBox(Number(e.target.id));

						if (delMainId) {
							newList = newList.filter(id => Number(id) !== Number(delMainId));
						}
						setCheckedIds(deleteDuplicate(newList));
					}
				} else {
					// 일반 checkBox 클릭 시
					// true일 경우 해당 checkBox의 id를 checkedIds state에 담아줍니다.
					if (e.target.checked) {
						const newList = checkedIds.concat(Number(e.target.id));

						setCheckedIds(newList);
					} else {
						// false일 경우 해당 checkBox의 id를 checkedIds state에서 제거합니다.
						const newList = checkedIds.filter(id => Number(id) !== Number(e.target.id));

						setCheckedIds(newList);
					}
				}
			}
		}
	};

	useEffect(() => {
		// 필수선택을 모두 만족 했는지 검사.
		let result = true;

		for (const iterator of requiredIds) {
			const idx = checkedIds.indexOf(iterator);

			if (idx === -1) {
				result = false;
				break;
			}
		}
		setRequiredChecked(result);
	}, [checkedIds, requiredIds]);

	// 약관 전체동의 핸들링
	// 전체 동의 클릭 시
	if (checkedIds.includes(checkAllId)) {
		// 현재 check된 것 중에 sub을 제외한 main들을 뽑아내고
		const newList = checkedIds.filter(id => allIMainds.includes(id));

		// true로 바뀌지 않은 main id가 있다면
		if (newList.length !== allIMainds.length) {
			// true로 바꿔줍니다.
			setCheckedIds(checkedId => checkedId.filter(id => id !== checkAllId));
		}
	} else {
		// 전체동의 이외의 checkbox 클릭 시
		// 현재 check된 것 중에 sub을 제외한 main들을 뽑아내고
		const newList = checkedIds.filter(id => allIMainds.includes(id));

		// 모든 main id들이 checked(true)일 경우
		if (newList.length === allIMainds.length) {
			// 전체동의도 true로 바꿔 줍니다.
			setCheckedIds(checkedId => checkedId.concat(checkAllId));
		}
	}

	return [checkedIds, onChange, requiredChecked];
};

export default useCheckTree;
