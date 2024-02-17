import { Routes, Route } from 'react-router-dom'
import './App.css';
import Signup from './Authentication/pages/Signup';
import Account from './Authentication/pages/Account';
import HomePage from './Authentication/pages/HomePage';
import Navbar from './Authentication/components/Navbar';
import Login from './Authentication/pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;