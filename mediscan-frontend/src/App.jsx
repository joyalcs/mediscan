import './App.css'
import { Navigate, Route, Routes } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import { useEffect } from 'react';
import PharmacySignupPage from './pages/PharmacySignupPage';
import CustomerSignupPage from './pages/CustomerSignupPage';
import HomePage from './pages/HomePage';
import Container from "react-bootstrap/esm/Container";
function App() {
  return (
    <>
      <Container fluid>
          <Routes>
            <Route path='/pharmacy-signup' element={<PharmacySignupPage/>}/>
            <Route path='/customer-signup' element={<CustomerSignupPage/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
      </Container>
    </>
  )
}
export default App