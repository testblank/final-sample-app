import React from 'react';
import {
	arrayOf,
	bool,
	element,
	number,
	object,
	oneOfType,
	shape,
	string,
} from 'prop-types';
import BaseImage from '@components/Image';
import decimalSeparator from '@utils/decimalSeparator';

const CardTypeTwo = ({
	bgClear,
	imgWidth = 40,
	imgBgColor,
	objList,
	style,
	className,
	backgroundColor,
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
			<div>
				{objList &&
					objList.length &&
					objList.map((item, idx) => (
						<div
							key={`${item.src}_${idx}`}
							className={`CardTypeTwo flex items-center justify-between w-full`}
							style={
								objList.length > 1 && objList.length - 1 !== idx ?
									{ marginBottom: '8px' } :
									{}
							}
						>
							<div className={`flex items-center`}>
								{typeof imgSrc !== 'string' ? (
									<div
										className={imgBgColor ? `bg-${imgBgColor}-500` : ``}
										style={{
											borderRadius: '50%',
											width: `${imgWidth}px`,
											height: `${imgWidth}px`,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											marginRight: '16px',
										}}
									>
										{item.imgSrc}
									</div>
								) : (
									<BaseImage
										width={`${imgWidth}px`}
										height={`${imgWidth}px`}
										src={item.imgSrc}
										style={{ borderRadius: '50%', marginRight: '16px' }}
										className={imgBgColor ? `bg-${imgBgColor}-500` : ``}
									/>
								)}
								<div
									className={`bank truncate text-gray-900 font-medium text-16 leading-24`}
									style={{ maxWidth: '122px' }}
								>
									{item.bankName}
								</div>
							</div>
							<div
								className={
									'balance text-gray-600 font-medium text-16 leading-24 flex-none'
								}
							>
								{decimalSeparator(item.balance)}원
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

CardTypeTwo.propTypes = {
	bgClear: bool,
	imgWidth: number,
	imgBgColor: string,
	objList: arrayOf(
		shape({
			imgSrc: oneOfType([string, object, element]),
			bankName: string,
			balance: number,
		}),
	),
	style: object,
	className: string,
	backgroundColor: string,
};

export default CardTypeTwo;
