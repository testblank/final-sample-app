import React, { useState } from 'react';
import useLogger from '@hooks/useLogger';
import loggerUtil from '@utils/loggerUtil';

const Logger = () => {
	const [count, setCount] = useState(0);

	const name = 'Logger';

	useLogger(name, [count]);
	const handleClickCount = () => {
		setCount(count + 1);
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
			<input
				type="button"
				value="update count"
				onClick={handleClickCount}
			/>
			<br />
			{count}
			<br />
			<br />
			<input
				type="button"
				value="update seconds"
				onClick={handleClickSeconds}
			/>
		</div>
	);
};

Logger.defaultProps = {};

export default Logger;
