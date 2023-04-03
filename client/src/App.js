 
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Header from './components/Header'
function App() {
  return (
    <>
    <Header/>
    <div className="App">
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
    </Routes>
       </div>
    </>
  );
}

export default App;
