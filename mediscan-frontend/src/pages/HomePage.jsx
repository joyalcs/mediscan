import React from 'react'
import NavbarComponent from '../components/Navbar'
import './styles/home.css'
import LeftHome from '../components/LeftHome'
import RightHome from '../components/RightHome'
import MedicineSearch from '../components/MedicineSearch'
import Cards from '../components/Cards'
import List from '../components/ListComponent'
import MediScan from '../components/MediScan'
import OurTeams from '../components/OurTeams'
import ContactUs from '../components/ContactUs'
import Left_side_sign from '../components/Left_side_sign'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#EAF0FF' }}>
    <div><NavbarComponent/></div>
    <div className="main">
      <div className="left-home">
        <LeftHome/>
      </div>
      <div className="right-home">
        <RightHome/>
      </div>
    </div>
    <div>
        <MedicineSearch/>
    </div>
    <div>
      <Cards/>
    </div>
    <div className="list">
      <List/>
    </div>
    <div className='text'>
      <MediScan/>
    </div>
    <div className='our-team-section'>
      <OurTeams/>
    </div>
    <div className="contact-us">
      <div className="left-contact">
        <Left_side_sign/>
      </div>
      <div className="right-contact">
        <ContactUs/>
      </div>
    </div>
    </div>
  )
}

export default HomePage