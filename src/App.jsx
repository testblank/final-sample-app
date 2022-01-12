import React from 'react';
import './App.css';
import Nav from '@routes/Nav';
import RootRoute from '@routes/RootRoute';

const App = () => {
	return (
		<div className="App">
			<Nav />
			<RootRoute />
		</div>
	);
};

export default App;