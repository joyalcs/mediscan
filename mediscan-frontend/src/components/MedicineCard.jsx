import React from 'react'

const MedicineCard = ({medicine}) => {
  return (
    <div>
        <div className="cards">
          {/* Example Medicine Card */}
          <Card sx={{ maxWidth: 345, minWidth: 250, margin: '0.5rem' }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {medicine?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {medicine?.company}
              </Typography>
              <Typography variant="body2" color="text.secondar">
                {medicine?.stock}
              </Typography>
            </CardContent>
          </Card>
          {/* Add more cards based on your data */}
        </div>
    </div>
  )
}

export default MedicineCard