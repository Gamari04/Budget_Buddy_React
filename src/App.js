
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link } from "react-router-dom";
import Create from './pages/Create'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import RegisterPage from './pages/Register';
function App() {
  return (
    <div>
     <nav className='navbar navbar-expand navbar-primary bg-primary'>
         <div className='navbar-nav mr-auto'>
             <li className='nav-item'>
              <Link to={"/"} className='nav-link'>Home</Link>
             </li>
             <li className='nav-item'>
              <Link to={"/create"} className='nav-link'>Create</Link>
             </li>
             <li className='nav-item'>
              <Link to={"/register"} className='nav-link'>Register</Link>
             </li>
         </div>
     </nav>
     <div className='container'>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/create' element={<Create />}/>
           <Route path='/*' element={<NotFound />}/>
           <Route path='/register' element={<RegisterPage />}/>
        </Routes>
     </div>
    </div>
  );
}

export default App;
