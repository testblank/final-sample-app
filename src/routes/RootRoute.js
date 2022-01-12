import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Logger from '@pages/Logger';
import GuestAuth from '@routes/GuestAuth';
import UserAuth from '@routes/UserAuth';

const RootRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />

		<Route
			path="/login"
			element={
				<GuestAuth>
					<Home />
				</GuestAuth>
			}
		/>

		<Route
			path="/logout"
			element={
				<UserAuth>
					<Home />
				</UserAuth>
			}
		/>

		<Route path="/context" element={<Home />} />

		<Route path="/conf" element={<Home />} />

		<Route path="/logger" element={<Logger />} />

		<Route path="/error" element={<Home />} />
	</Routes>
);

RootRoutes.defaultProps = {};

export default RootRoutes;
