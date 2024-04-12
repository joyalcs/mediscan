import React, { useState } from 'react';
import './styles/MedicineSearch.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Doctor from '../assets/images/Doctors.png'
const MedicineSearch = () => {
    const [pincode, setPincode] = useState('');
    const [searchTxt, setSearchTxt] = useState('');

    const handleChange = (event) => {
        setPincode(event.target.value);
    };

    return (
        <>
        <div className='main'>
            <img src={Doctor} className='doctor' width={400} height={350}/>
            <div className="heading">
                <h2>
                    <span className='first'>Feel better about finding</span>  <br/>
                    <span className='second'>Medicine Here</span>
                </h2>
                <p>At mediscan, we take care of finding out the right medicine for you and your family</p>
            </div>
        </div>
        <div className="medi-search">
            <h2>Search for Medicines / Healthcare Products</h2>
            <div className="search-bar">
                {/* Dropdown */}
                <FormControl size="small" className="select-dropdown">
                    <InputLabel id="pincode-label">Pincode</InputLabel>
                    <Select
                        labelId="pincode-label"
                        id="pincode-select"
                        value={pincode}
                        label="Pincode"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    type="search"
                    placeholder="Search"
                    value={searchTxt}
                    onChange={e => setSearchTxt(e.target.value)}
                    className="search-input"
                    size="small"
                />

                <Button variant="" className="search-button">
                    <SearchOutlinedIcon/>
                </Button>
            </div>
        </div>
        </>
    );
};

export default MedicineSearch;
