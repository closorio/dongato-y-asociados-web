import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './components/Login.css';
import './components/Register.css';
import './components/Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App/>*/}
    {/*<Register/>*/}
    {/*<Home/>*/}
    <Register/>
  </React.StrictMode>,
)
