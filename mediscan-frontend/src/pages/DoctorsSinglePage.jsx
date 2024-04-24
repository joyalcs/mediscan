import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Profile from '../assets/images/profile.jpg';
import '../components/styles/Cards.css';
import TimeSlotsList from '../components/TimeSlotsList';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DoctorsSinglePage = () => {
  return (
    <div className="doctors-single-page">
      <Row>
        {/* Left column with doctor card */}
        <Col md={6}>
          <Card style={{ maxWidth: 345, height: 260, minWidth: 250 , marginTop:100, marginLeft:100 }}>
            <CardMedia
              component="img"
              height="300"
              image={Profile}
              alt="Doctor"
            />
            <CardContent>
              <Typography variant="h6" style={{textAlign: 'center'}}>Alensa Anto</Typography>
              <Typography variant="body2" style={{textAlign: 'center'}}>ENT</Typography>
            </CardContent>
          </Card>
        </Col>
        {/* Right column with TimeSlotsList */}
        <Col md={6} style={{position: 'absolute', top: 100, right: 800}}>
          <TimeSlotsList />
        </Col>
      </Row>
    </div>
  );
};

export default DoctorsSinglePage;
