import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Workspace from "./pages/Workspace";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/workspace" element={<Workspace />}>
          </Route>
            {/* {isLogin ? (
              <Login switchToRegister={() => setIsLogin(false)} />
            ) : (
              <Register switchToLogin={() => setIsLogin(true)} />
            )} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
