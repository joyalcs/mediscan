import React from 'react'
import './styles/Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MapIcon from '@mui/icons-material/Map';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MedicationIcon from '@mui/icons-material/Medication';
const Cards = () => {
  return (
    <div className='cards cards-align'>
        <div className='card'>
        <Card sx={{ maxWidth: 345, height: 200 }}>           
           
      <CardContent>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <MapIcon sx={{ fontSize: 50,  color: 'blue' }} /> {/* Place the icon within a div */}
                </div>
        <Typography gutterBottom variant="h6" component="div">
        Search Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Find Pharmacy and medicine based on your location
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        <div className='card'>
        <Card sx={{ maxWidth: 345, height: 200 }}>           
      <CardContent>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <AssignmentIcon sx={{ fontSize: 50, color: 'blue' }} /> {/* Place the icon within a div */}
                </div>
        <Typography gutterBottom variant="h6" component="div">
        Know Your Medicine
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Know about the side effects of your medicine
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        <div className='card'>
        <Card sx={{ maxWidth: 345, height: 200 }}>           
           
      <CardContent>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <MedicationIcon sx={{ fontSize: 50,  color: 'blue' }} /> {/* Place the icon within a div */}
                </div>
        <Typography gutterBottom variant="h6" component="div">
        Consult a doctor
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Book an appointment with one of our in house doctors
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    
    
    
    </div>
  )
}

export default Cards