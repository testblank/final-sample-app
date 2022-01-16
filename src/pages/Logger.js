import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useLogger from '@modules/hooks/useLogger';
import loggerUtil from '@utils/loggerUtil';
import _ from '@utils/lodashUtil';

const testValue = {
	a: '1',
	b: [2, 3],
	c: { d: '4', e: '5' },
	f: { g: [5, 6], h: { i: { j: [7, 8] } } },
};

const Logger = () => {
	const loginData = useSelector(state => state.login);

	const [count, setCount] = useState(0);
	const [deepObj, setDeepObj] = useState(testValue);

	const name = 'Logger';

	useLogger(name, [count]);
	const handleClickCount = () => {
		setCount(count + 1);
	};

	useLogger('deep obj', [deepObj]);
	const handleClickObj = () => {
		const afterObj = {
			a: '11',
			b: [22, 3],
			c: { d: '44', e: '5' },
			f: { g: [5, 66], h: { i: { j: [_.random(0, 100)] } } },
		};

		setDeepObj(afterObj);
	};

	const timeKey = 'test';

	loggerUtil.time(timeKey);
	const handleClickSeconds = () => {
		loggerUtil.timeEnd(timeKey);
	};

	loggerUtil.warn('warn 입니다.');
	loggerUtil.error('error 입니다.');

	return (
		<div className="Logger">
			{loginData.userInfo && loginData.userInfo.userName}
			<br />
			<input type="button" value="update count" onClick={handleClickCount} />
			<br />
			{count}
			<br />
			<input type="button" value="update deep obj" onClick={handleClickObj} />
			<br />
			<br />
			<br />
			<input type="button" value="update seconds" onClick={handleClickSeconds} />
		</div>
	);
};

Logger.defaultProps = {};

export default Logger;
