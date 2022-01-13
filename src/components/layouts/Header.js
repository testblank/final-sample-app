import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const inputStyle = {
	border: '1px solid #e1d5d5',
	paddingLeft: '5px',
	marginLeft: '20px',
};

const Header = () => {
	const [url, setUrl] = useState('/');
	const navigate = useNavigate();

	const handkleKeyPress = useCallback(e => {
		if (e.key === 'Enter') {
			navigate(url);
		}
	}, [url]);

	const handleChange = e => {
		setUrl(e.target.value);
	};

	const handleClickBack = useCallback(() => {
		navigate(-1);
	}, []);

	return (
		<div>
			<input type="button" value='뒤로' onClick={handleClickBack} />
			<input type="text" style={inputStyle} value={url} onChange={handleChange} onKeyPress={handkleKeyPress} />
		</div>
	);
};

export default Header;
