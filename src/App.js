
import './App.css';
import NavBar from './pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/Components/About/About';

function App() {
  return (
    <div>
     <NavBar></NavBar>
     <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

     </Routes>
    </div>
  );
}

export default App;
