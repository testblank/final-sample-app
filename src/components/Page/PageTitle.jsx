import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ children }) => (
	<div className={'font-bold text-24 leading-36 w-full flex text-left'}>
		{children}
	</div>
);

PageTitle.propTypes = {
	children: PropTypes.element,
};

export default PageTitle;
