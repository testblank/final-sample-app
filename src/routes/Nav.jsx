import * as React from 'react';
import { Link } from 'react-router-dom';
// import envUtil from '@utils/envUtil';

// const navStyle = {
// 	width: '150px',
// 	textAlign: 'left',
// };

const initailPathList = [
	{
		path: '/',
		value: 'home',
	},
	{
		path: '/login',
		value: 'login',
	},
	{
		path: '/logout',
		value: 'logout',
	},
	{
		path: '/context',
		value: 'context',
	},
	{
		path: '/conf',
		value: 'conf',
	},
	{
		path: '/logger',
		value: 'logger',
	},
	{
		path: '/error',
		value: 'error',
	},
];

const Nav = () => {
	// const [envCheck, setEnvCheck] = React.useState(false);
	const [pathList, setPathList] = React.useState(initailPathList);

	React.useEffect(() => {
		setPathList(initailPathList);
	}, [initailPathList]);

	// React.useEffect(() => {
	// 	if (!envUtil.getEnvByKey('REACT_APP_NAV')) {
	// 		setEnvCheck(false);
	// 	}
	// }, []);

	// if (!envCheck) {
	// 	return null;
	// }

	return (
		<nav className="flex justify-between items-center max-w-md px-3">
			{pathList &&
				pathList.length > 0 &&
				pathList.map((item) => (
					<Link key={`${item.path}`} to={item.path}>
						{item.value}
					</Link>
				))}
		</nav>
	);
};
// <ul>
// 	<li>
// 		<Link to="/">Home</Link>
// 	</li>
// 	<li>
// 		<Link to="/login">login</Link>
// 	</li>
// 	<li>
// 		<Link to="/logout">logout</Link>
// 	</li>
// 	<li>
// 		<Link to="/context">context</Link>
// 	</li>
// 	<li>
// 		<Link to="/conf">conf</Link>
// 	</li>
// 	<li>
// 		<Link to="/logger">logger</Link>
// 	</li>
// 	<li>
// 		<Link to="/error">error</Link>
// 	</li>
// </ul>

export default Nav;
