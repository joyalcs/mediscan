import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles/Cards.css'
import Profile from '../assets/images/profile.jpg'

const OurTeams  = () => {
  return (
    <div className=' ourteam'>
        <h2 className='team'>Our Team</h2>
        <div className='ourteams-cards'>

        <div className="card">
        <Card sx={{ maxWidth: 345, height:260 }}>
      <CardMedia
        sx={{ height: 180 }}
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
        <div className="card">
        <Card sx={{ maxWidth: 345, height:260 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={Profile}
        title="Aloysius J Kolapran"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Aloysius J Kolapran
        </Typography>
      </CardContent>
    </Card>
        </div>
        <div className="card">
        <Card sx={{ maxWidth: 345, height:260 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={Profile}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Jaivin Jospeh
        </Typography>
      </CardContent>
    </Card>
        </div>
        <div className="card">
        <Card sx={{ maxWidth: 345, height:260 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={Profile}
        title="Profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        John Antony
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>

    </div>
  )
}

export default OurTeams 