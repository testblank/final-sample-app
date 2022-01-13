import React from 'react';
import Nav from '@routes/Nav';
import RootRoute from '@routes/RootRoute';
import Header from '@components/layouts/Header';
import './App.css';

const App = () => (
	<div className="App">
		<Header />
		<Nav />
		<RootRoute />
	</div>
);

export default App;
