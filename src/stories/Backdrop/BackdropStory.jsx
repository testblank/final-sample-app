import React, { useState } from 'react';
import PropTypes from 'prop-type';
import Backdrop from '@publish/BackdropPublish';
import { BaseButton2 } from '@components/Button';

const BackdropStory = ({ children = null }) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<BaseButton2
				color='primary'
				onClick={() => {
					setShow(true);
				}}
				size='small'
				text='Show backdrop'
				variant='contained'
			/>
			<Backdrop
				show={show}
				onClick={() => {
					setShow(false);
				}}
			/>
		</>
	);
};

BackdropStory.propTypes = {
	children: PropTypes.element,
};

export default BackdropStory;
