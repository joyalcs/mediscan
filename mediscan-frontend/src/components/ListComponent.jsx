import React from 'react'
import './styles/List.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


const ListComponent = () => {
  return (
    <div>
        <div className="head">
            <h2>Find the right Medicine at<br/> your fingertip</h2>
        </div>
        <div className='list-class'>
        <List sx={{ width: '100%', maxWidth: 560}}>
      <ListItem>
        <ListItemAvatar >
          <Avatar sx={{backgroundColor: 'blue'}}>
            <SearchOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Search the nearest Pharmecy" secondary="Find Pharmacy and medicine based on your location" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor: 'blue'}}>
            <HeadsetMicIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Chatbot suggest you an alternative" secondary="Just type in the medicine in the chatbot, and it will suggest you an alternative" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor: 'blue'}}>
            <VaccinesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Know about your medicine" secondary="Go through our large collection of medicine article to know about the side effects of your medicine" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{backgroundColor: 'blue'}}>
            <LocalHospitalIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Consult with with a Doctor" secondary="Book an appointment with one of our in house doctors" />
      </ListItem>
    </List>
    </div>
    <div className='list-img'>

    </div>
    </div>
  )
}

export default ListComponent