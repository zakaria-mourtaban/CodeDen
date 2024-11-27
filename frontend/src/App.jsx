import logo from './logo.svg';
import React, { useState } from "react";
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">

      {isLogin ? (
        <Login switchToRegister={() => setIsLogin(false)} />
      ) : (
        <Register switchToLogin={() => setIsLogin(true)} />
      )}

    </div>
  );
}

export default App;
