import React, { useState, useEffect } from 'react';
import { usePageLayout, HeaderLayout } from 'layout';
import { useTextInput, useCheckTree } from '@hooks';

import 'styles/index.css';

import { BaseInput, MeasureInput, SecretInput } from '@components/TextInput2';

import { CheckBox } from '@components/CheckBox2';

import BaseButton from '@components/Button/BaseButton2';
import { checkValidation } from 'util/validation';
import { Popup } from '@components/modal/Popup';
import { Sheet } from '@components/modal/Sheet';

const SampleJoin = ({ history, location, match, staticContext }) => {
	// const dispatch = useDispatch();
	const {
		renderPage,
		openPopup,
		closePopup,
		openSheet,
		// closeSheet,
	} = usePageLayout({
		headerArea: true,
	});

	// console.log('isSheetOpen', isSheetOpen);

	const [pwConfirmCaption, setPwConfirmCaption] = useState('');
	const [idConfirm, setIdConfirm] = useState(false);
	const [valueId, onChangeId] = useTextInput('id');
	const [valuePw, onChangePw, captionTextPw] = useTextInput('password');
	const [valuePwConfirm, onChangePwConfirm] = useTextInput();
	const [valueMeasure, onChangeMeasure] = useTextInput('number');
	const [checked, onChange] = useCheckTree();

	useEffect(() => {
		if (valuePw.length && valuePwConfirm.length) {
			if (valuePw === valuePwConfirm) {
				setPwConfirmCaption('비밀번호가 일치합니다.');
			} else {
				setPwConfirmCaption('비밀번호가 일치하지 않습니다.');
			}
		} else {
			setPwConfirmCaption('');
		}
	}, [valuePw, valuePwConfirm]);

	const handleOnClickCheckId = () => {
		const isOk = checkValidation.id(valueId);

		setIdConfirm(isOk);

		openPopup();
	};

	const handleOnClickJoin = () => {
		openSheet();
	};

	const headerRender = () => <HeaderLayout type={'page'} title={'회원가입'} />;

	const popupRender = () => (
		<Popup
			titleStr={'중복확인'}
			messageStr={
				idConfirm ?
					'사용가능한 아이디 입니다.' :
					'아이디를 다시 입력해 주세요'
			}
			btnQuantity={1}
			firstBtnStr={'확인'}
			onClickDim={() => closePopup()}
			onClick={() => closePopup()}
		/>
	);

	const sheetRender = () => (
		<Sheet>
			<div>sample sheet body</div>
		</Sheet>
	);

	const bodyRender = () => (
		<div className={'SampleJoinBody flex flex-col text-left px-4 pt-4'}>
			<div className={'text-xl'}>회원 정보 입력</div>

			<div className={'text-sm text-gray-600 mb-8'}>
          따릉이 회원 가입 정보를 입력해주세요.
			</div>

			<div className={'mb-3 h-20'}>
				<BaseInput
					name={'primary'}
					labelText={'아이디'}
					placeholder={'아이디를 입력해 주세요'}
					captionText={idConfirm ? '사용 가능한 아이디 입니다.' : ''}
					captionClassName={'text-red-300'}
					value={valueId}
					onChange={onChangeId}
				>
					{/* children wrapping 해야 함 */}
					<div className={'ml-2'}>
						<BaseButton
							text={'중복 확인'}
							onClick={handleOnClickCheckId}
							color='primary'
							variant='outline'
							size='small'
						/>
					</div>
				</BaseInput>
			</div>
			<div className={'mb-3 h-20'}>
				<SecretInput
					name={'secret'}
					labelText={'비밀번호'}
					placeholder={'비밀번호를 입력해 주세요'}
					captionText={captionTextPw}
					captionClassName={'text-red-300'}
					value={valuePw}
					onChange={onChangePw}
				/>
			</div>
			<div className={'mb-3 h-20'}>
				<SecretInput
					name={'secret'}
					labelText={'비밀번호 확인'}
					placeholder={'비밀번호를 입력해 주세요'}
					captionText={pwConfirmCaption}
					captionClassName={'text-red-300'}
					value={valuePwConfirm}
					onChange={onChangePwConfirm}
				/>
			</div>

			<div className={'mb-3 h-24'}>
				<BaseInput
					name={'email'}
					labelText={'이메일'}
					placeholder={'이메일 주소를 입력해 주세요'}
				/>
				<div className={'mt-2'}>
					<CheckBox
						id={0}
						value={'이메일 수신거부'}
						checked={checked}
						onChange={onChange}
					/>
				</div>
			</div>

			<div className={'w-3/4 mb-3 h-20'}>
				<MeasureInput
					name={'measure'}
					labelText={'몸무게'}
					subLabelText={'(선택)'}
					value={valueMeasure}
					onChange={onChangeMeasure}
					measureUnit={'Kg'}
				/>
			</div>

			<div className={'mb-3 text-xs text-gray-600'}>
          입력하신 정보는 서울시설공단에서 보관하며, 티머니GO에서 <br />
          별도로 보유하지 않습니다.
			</div>

			<div className={'w-full'}>
				<BaseButton
					text={'따릉이 가입하기'}
					onClick={handleOnClickJoin}
					color='primary'
					variant='contained'
					size='large'
					fullWidth={true}
				/>
			</div>
		</div>
	);

	const render = renderPage({
		header: headerRender(),
		popup: popupRender(),
		sheet: sheetRender(),
		body: bodyRender(),
	});

	return render;
};

export default SampleJoin;
