import React from 'react';
import {
	string,
	arrayOf,
	shape,
	number,
	oneOf,
	oneOfType,
	element,
	bool,
	object,
} from 'prop-types';
import CardModuleThumb from './Module';

const CardTypeOne = ({
	bgClear,
	thumbObjList,
	imgWidth,
	imgBgColor,
	fontSize,
	fontColor,
	fontFamily,
	lineHeight,
	style,
	className,
	backgroundColor = 'gray',
}) => {
	const styleObj = {
		width: '100%',
		minHeight: '72px',
		backgroundColor: bgClear ? 'transparent' : '',
		borderTopLeftRadius: '16px',
		borderTopRightRadius: '16px',
		borderBottomRightRadius: '16px',
		borderBottomLeftRadius: '16px',
	};

	return (
		<div
			className={`BaseCardPublish ${!bgClear ? `bg-${backgroundColor}-50` : ``} ${className || ''}`}
			style={Object.assign(styleObj, style)}
		>
			<div className={`thumbWrap w-full h-full overflow-x-scroll`}>
				<div className={'flex justify-between'}>
					{thumbObjList &&
						thumbObjList.length > 0 &&
						thumbObjList.map((item, idx) => (
							<CardModuleThumb
								key={`${item.src}_${idx}`}
								src={item.src}
								title={item.title}
								imgWidth={imgWidth}
								imgBgColor={imgBgColor}
								fontSize={fontSize}
								fontColor={fontColor}
								fontFamily={fontFamily}
								lineHeight={lineHeight}
								style={
									thumbObjList.length - 1 !== idx ?
										{ marginRight: '16px' } :
										{}
								}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

CardTypeOne.propTypes = {
	bgClear: bool,
	thumbObjList: arrayOf(
		shape({
			src: oneOfType([element, string]),
			title: oneOfType([element, string]),
		}),
	),
	imgWidth: number,
	imgBgColor: string,
	fontSize: number,
	fontColor: string,
	fontFamily: oneOf(['bold', 'medium', 'regular']),
	lineHeight: number,
	style: object,
	className: string,
	backgroundColor: string,
};

export default CardTypeOne;
