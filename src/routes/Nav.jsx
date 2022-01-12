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
