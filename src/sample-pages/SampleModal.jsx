import React from 'react';
import PropTypes from 'prop-types';

import { Sheet } from '@components/modal/Sheet';
import { Popup } from '@components/modal/Popup';
import { svgIconLocation } from '@res/svg';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerState, setPopupState, setSheetState } from 'redux/reducers/modalReducer';
import { TitleBox } from '@components/TitleBox';
import { Drawer } from '@components/modal/Drawer';

const SampleModal = props => {
	const dispatch = useDispatch();
	const { popupState, sheetState, drawerState } = useSelector(state => state.modalReducer);

	const cbOnClick = () => {
		console.log('here');
		switch (props.type) {
			case 'popup':
				dispatch(setPopupState(true));
				break;
			case 'sheet':
				dispatch(setSheetState(true));
				break;
			case 'drawer':
				dispatch(setDrawerState(true));
				break;
			default:
				break;
		}
	};

	const renderModal = () => {
		switch (props.type) {
			case 'popup':
				return popupState && <Popup {...props} />;
			case 'sheet':
				return (
					sheetState && (
						<Sheet {...props}>
							<SampleSheetBody />
						</Sheet>
					)
				);
			case 'drawer':
				return (
					drawerState && (
						<Drawer {...props}>
							<SampleDrawerBody />
						</Drawer>
					)
				);
			default:
				return null;
		}
	};

	return (
		<div>
			<div
				onClick={cbOnClick}
				style={{
					border: '1px solid black',
					borderRadius: '4px',
					width: 'fit-content',
					padding: '3px 5px',
				}}
			>
                open {props.type}
			</div>
			<div>{renderModal()}</div>
		</div>
	);
};

SampleModal.propTypes = {
	type: PropTypes.string,
};

export default SampleModal;

export const SampleDrawerBody = () => (
	<div>
		<TitleBox
			svgElemnt={svgIconLocation(24, 24)}
			titleString={'My Files'}
			onClick={() => console.log('clickTitleBox')}
		/>
		<TitleBox
			svgElemnt={svgIconLocation(24, 24)}
			titleString={'Share with me'}
			onClick={() => console.log('clickTitleBox')}
		/>
		<TitleBox
			svgElemnt={svgIconLocation(24, 24)}
			titleString={'Starred'}
			onClick={() => console.log('clickTitleBox')}
		/>
	</div>
);

export const SampleSheetBody = () => (
	<div className={`text-left`} style={{ padding: '0 20px' }}>
		<div
			className={`font-bold text-16 leading-24 text-gray-900 flex items-center`}
			style={{ height: '47px' }}
		>
                Title (Optional)
		</div>
		<div
			className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
			style={{
				borderColor: '#E9EFF5',
				height: '52px',
				boxSizing: 'border-box',
			}}
		>
                Option1
		</div>
		<div
			className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
			style={{
				borderColor: '#E9EFF5',
				height: '52px',
				boxSizing: 'border-box',
			}}
		>
                Option2
		</div>
		<div
			className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
			style={{
				borderColor: '#E9EFF5',
				height: '52px',
				boxSizing: 'border-box',
			}}
		>
                Option3
		</div>
		<div
			className={`font-regular text-14 leading-21 text-gray-900 flex items-center border-b`}
			style={{
				borderColor: '#E9EFF5',
				height: '52px',
				boxSizing: 'border-box',
			}}
		>
                Option4
		</div>
	</div>
);
