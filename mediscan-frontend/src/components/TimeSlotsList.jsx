import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


const TimeSlotsList = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
  return (
    <>
     <h2>Time Slots</h2>
        <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" variant="h1">Book Your Time Slot</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="10:00" control={<Radio />} label="10:00" />
        <FormControlLabel value="10:30" control={<Radio />} label="10:30" />
      </RadioGroup>
      <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Book
        </Button>
    </FormControl>
    </>
  )
}

export default TimeSlotsList