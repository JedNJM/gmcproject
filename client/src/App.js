 
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Header from './components/Header'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './redux/features/authSlice';
import AddEditTour from './pages/AddEditTour';
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <Header/>
    <div className="App">
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/addTour" element={<AddEditTour/>} />
       <Route path="/editTour/:id" element={<AddEditTour/>} />
    </Routes>
       </div>
    </>
  );
}

export default App;
