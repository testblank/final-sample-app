import { useModal } from '@modules/hooks';
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
	const [pathList, setPathList] = React.useState(initialPathList);
	const { modalState, handleDrawer } = useModal();
	const { drawerState } = modalState;

	React.useEffect(() => {
		setPathList(initialPathList);
	}, [initialPathList]);

	const handleClick = () => {
		drawerState && handleDrawer(false);
	};

	return (
		<nav className="flex justify-between items-center flex-col w-full px-3 h-16 text-20">
			{pathList &&
				pathList.length > 0 &&
				pathList.map(item => (
					<Link key={`${item.path}`} to={item.path} className='my-4' onClick={handleClick}>
						{item.value}
					</Link>
				))}
		</nav>
	);
};

export default Nav;
