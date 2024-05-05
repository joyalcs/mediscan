import React, { useState } from 'react';
import './styles/MedicineSearch.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Doctor from '../assets/images/Doctors.png';
import { setSearchDetails } from '../features/user/searchSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MedicineSearch = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pincode, setPincode] = useState('');
    const [medicine, setMedicine] = useState('');
    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    };

    const handleMedicineChange = (event) => {
        setMedicine(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Dispatch Redux action to store search details
        dispatch(setSearchDetails({ pincode, medicine }));
        navigate('/pharmacies')
        
    };

    return (
        <div className='main'>
            <img src={Doctor} className='doctor' width={400} height={350} alt="Doctor" />
            <div className="heading">
                <h2>
                    <span className='first'>Feel better about finding</span>  <br/>
                    <span className='second'>Medicine Here</span>
                </h2>
                <p>At mediscan, we take care of finding out the right medicine for you and your family</p>
            </div>
            <Link to="/pharmacies">
            <div className="medi-search">
                <h2>Search for Medicines / Healthcare Products</h2>
                <div className="search-bar">
                    <TextField
                        type="text"
                        placeholder="Pincode"
                        value={pincode}
                        onChange={handlePincodeChange}
                        className="search-input"
                        size="small"
                        name="pincode"
                    />
                    <TextField
                        type="text"
                        placeholder="Medicine"
                        value={medicine}
                        onChange={handleMedicineChange}
                        className="search-input"
                        size="small"
                        name="medicine"
                    />
                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        className="search-button"
                    >
                        <SearchOutlinedIcon />
                    </Button>
                </div>

            </div>
            </Link>
        </div>
    );
};

export default MedicineSearch;
