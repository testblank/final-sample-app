import * as React from 'react';
import { Link } from 'react-router-dom';

const initialPathList = [
	{
		path: '/',
		value: 'home',
	}, {
		path: '/login',
		value: 'login',
	}, {
		path: '/logout',
		value: 'logout',
	}, {
		path: '/context',
		value: 'context',
	}, {
		path: '/conf',
		value: 'conf',
	}, {
		path: '/logger',
		value: 'logger',
	}, {
		path: '/error',
		value: 'error',
	},
];

const Nav = () => {
	// const [envCheck, setEnvCheck] = React.useState(false);
	const [pathList, setPathList] = React.useState(initialPathList);

	React.useEffect(() => {
		setPathList(initialPathList);
	}, [initialPathList]);

	return (
		<nav className="flex justify-between items-center w-full px-3 h-16">
			{pathList &&
				pathList.length > 0 &&
				pathList.map(item => (
					<Link key={`${item.path}`} to={item.path}>
						{item.value}
					</Link>
				))}
		</nav>
	);
};

export default Nav;
