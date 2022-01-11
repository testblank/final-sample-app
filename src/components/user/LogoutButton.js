import React from 'react';
import Button from '@components/atomic/Button';

const style = {
	border: 'none',
	color: 'black',
};
const LogoutButton = () => {
	const handleClick = () => {
		console.log('로그아웃');
	};

	return (
		<div className="LogoutButton">
			<Button style={style} onClick={handleClick}>
				로그아웃
			</Button>
		</div>
	);
};
export default LogoutButton;
