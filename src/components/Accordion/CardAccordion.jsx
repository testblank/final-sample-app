import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { arrayOf, bool, number, object, oneOfType, shape, string } from 'prop-types';

import { BaseCard, CardTypeFour, CardTypeTwo } from '@components/Card';

const CardAccordion = ({
	initOpen = true,
	mainTitle,
	mainNum,
	mainDesc,
	mainBalance,
	subList,
}) => {
	const refWrap = useRef(null);
	const refMain = useRef(null);
	const refSub = useRef(null);
	const refMainHeight = useRef(0);
	const refSubHeight = useRef(0);
	const [isOpen, setIsOpen] = useState(initOpen);

	const onClickMain = () => {
		setIsOpen(!isOpen);
	};

	useLayoutEffect(() => {
		if (refSub) {
			refMainHeight.current = refMain.current.getBoundingClientRect().height;
			refSubHeight.current = refSub.current.getBoundingClientRect().height;
		}
	}, []);

	useEffect(() => {
		if (refWrap && refMain && refSub) {
			const elWrap = refWrap.current;
			const elSub = refSub.current;

			const mainHeight = refMainHeight.current;
			const subHeight = refSubHeight.current;

			if (isOpen) {
				elWrap.style.height = `${mainHeight + subHeight}px`;
				elSub.style.opacity = `1`;
				elSub.style.transform = `translateY(${0}px)`;
			} else {
				elWrap.style.height = `${mainHeight}px`;
				elSub.style.opacity = `0`;
				elSub.style.transform = `translateY(-${mainHeight}px)`;
			}
		}
	}, [isOpen]);

	return (
		<BaseCard backgroundColor={'gray'}>
			<div ref={refWrap} style={{ transition: `all 0.2s linear`, overflow: 'hidden' }}>
				<div
					ref={refMain}
					className={`main relative z-2`}
					style={{ transition: `all 0.2s linear` }}
					onClick={onClickMain}
				>
					<CardTypeFour
						isOpen={isOpen}
						title={mainTitle}
						num={mainNum}
						desc={mainDesc}
						balance={mainBalance}
					/>
				</div>
				<div
					ref={refSub}
					className={`sub relative z-1 opacity-1`}
					style={{ transition: `all 0.2s linear` }}
				>
					<CardTypeTwo bgClear objList={subList} />
				</div>
			</div>
		</BaseCard>
	);
};

CardAccordion.propTypes = {
	initOpen: bool,
	mainTitle: string,
	mainNum: oneOfType([number, string]),
	mainDesc: string,
	mainBalance: oneOfType([number, string]),
	subList: arrayOf(
		shape({
			imgSrc: oneOfType([string, object]),
			bankName: string,
			balance: number,
		}),
	),
};

export default CardAccordion;
