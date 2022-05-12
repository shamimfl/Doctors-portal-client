import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './Component/AppointmentPage/AppointmentPage';
import Home from './Component/Home/Home';
import Header from './Component/Shared/Header/Header';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<AppointmentPage></AppointmentPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
