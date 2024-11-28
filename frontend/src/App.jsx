import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Workspace from "./pages/Workspace";
import { EchoProvider } from "./context/echo";
function App() {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="App">

			<EchoProvider>
				<Router>
					<Routes>
						<Route
							path="/workspace"
							element={<Workspace />}
						></Route>
						<Route
							path="/"
							element={isLogin ? (
								<Login switchToRegister={() => setIsLogin(false)} />
							  ) : (
								<Register switchToLogin={() => setIsLogin(true)} />
							  )}
							

						></Route>
					</Routes>
				</Router>
			</EchoProvider>
		</div>
	);
}

export default App;
