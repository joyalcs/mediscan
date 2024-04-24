import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Profile from '../assets/images/profile.jpg'
import '../components/styles/Cards.css'

const Doctors = () => {
  return (
    <div className="card">
        <h2 style={{fontSize: 32, marginLeft:30}}>Our Doctors</h2>
        <div className='cards'>
    <Card sx={{ maxWidth: 345, height:260, minWidth:250 }}>
      <CardMedia
        sx={{ height: 210 }}
        image={Profile} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Alensa Anto
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default Doctors