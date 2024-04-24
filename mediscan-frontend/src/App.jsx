import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import { useEffect } from 'react';
import PharmacySignupPage from './pages/PharmacySignupPage';
import CustomerSignupPage from './pages/CustomerSignupPage';
import HomePage from './pages/HomePage';
import Container from "react-bootstrap/esm/Container";
import AddDoctors from './pages/AddDoctors';
import Doctors from './pages/Doctors';
import DoctorsSinglePage from './pages/DoctorsSinglePage';
import AddMedicinePage from './pages/AddMedicinePage';
import MedicinesPage from './pages/MedicinesPage';
function App() {
  return (
    <>
      <Container fluid>
          <Routes>
            <Route path='/pharmacy-signup' element={<PharmacySignupPage/>}/>
            <Route path='/customer-signup' element={<CustomerSignupPage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/add-doctor' element={<AddDoctors/>}/>
            <Route  path='/doctors' element={<Doctors/>}/>
            <Route path='/doctor' element={<DoctorsSinglePage/>}/>
            <Route path='/add-medicine' element={<AddMedicinePage/>} />
            <Route path='/pharmacies' element={<MedicinesPage/>}/>
          </Routes>
      </Container>
    </>
  )
}
export default App