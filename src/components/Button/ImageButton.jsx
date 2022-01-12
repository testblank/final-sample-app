import React from 'react';
import ImageButtonPublish from 'publish/ImageButtonPublish';
import debounce from 'util/debounce';

const ImageButton = (props) => {
	const cbOnClick = () => {
		if (props.onClick) {
			debounce(onClick, 3000);
		}
	};

	return <ImageButtonPublish {...props} onClick={cbOnClick} />;
};

export default ImageButton;
