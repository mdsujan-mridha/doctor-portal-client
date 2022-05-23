
import './App.css';
import NavBar from './pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/Components/About/About';
import Login from './pages/Components/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Register from './pages/Components/Register/Register';

function App() {
  return (
    <div>
     <NavBar></NavBar>
     <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/appoinment' element={<Appointment></Appointment>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

     </Routes>
    </div>
  );
}

export default App;
