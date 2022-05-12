import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './Component/AppointmentPage/AppointmentPage';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<AppointmentPage></AppointmentPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
