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
import LoginPage from './pages/LoginPage';
import Medicines from './pages/Medicines'
import { getToken } from './services/localStorage';
import PrivateRoutes from './utils/PrivateRoute';
function App() {
  const {usename} = getToken()
  return (
    <>
      <Container fluid>
          <Routes>
            <Route path='/pharmacy-signup' element={<PharmacySignupPage/>}/>
            <Route path='/customer-signup' element={<CustomerSignupPage/>}/>
            <Route path ='/login' element={<LoginPage/>}/>
            <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/add-doctor' element={<AddDoctors/>}/>
              <Route  path='/doctors' element={<Doctors/>}/>
              <Route path='/doctor' element={<DoctorsSinglePage/>}/>
              <Route path='/add-medicine' element={<AddMedicinePage/>} />
              <Route path='/pharmacies' element={<MedicinesPage/>}/>
              <Route path = '/medicines' element={<Medicines/>}/>
            </Route>
          </Routes>
      </Container>
    </>
  )
}
export default App