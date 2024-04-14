import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Create from './pages/Create'
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Register from './pages/Register';
import Expenses from './pages/Expense/Expenses';
import AddExpense from './pages/Expense/AddExpense';
import Edit from './pages/Expense/Edit';

function App() {
  return (
    <div>
      <AuthProvider> {/* AuthProvider englobe tout */}
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
            <li className='nav-item'>
              <Link to={"/expenses"} className='nav-link'>Expenses</Link>
            </li>
          </div>
        </nav>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/addExpense' element={<AddExpense />} />
            <Route path='/register' element={<Register />} /> {/* Register ici */}
            <Route path='/expenses' element={<Expenses />} />
            <Route path='/expenses/:expenseId/edit' element={<Edit />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
