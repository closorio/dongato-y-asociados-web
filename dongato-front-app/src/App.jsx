import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login/Login';
import RegisterForm from './components/register/Register';
import './components/register/Register.css';
import './components/login/Login.css';
import './components/home/Home.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;





