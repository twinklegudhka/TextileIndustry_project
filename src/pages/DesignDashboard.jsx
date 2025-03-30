import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Slider,
  Grid,
} from '@mui/material';

const DesignDashboard = () => {
  const designData = {
    name: 'Floral Print',
    series: 'Summer Collection 2024',
    availableMeters: 500,
    colors: [
      {
        name: 'Blue',
        imageUrl: '/assets/floral_blue.jpg', // Replace with your image paths
      },
      {
        name: 'Red',
        imageUrl: '/assets/floral_red.jpg',
      },
      {
        name: 'Yellow',
        imageUrl: '/assets/floral_yellow.jpg',
      },
      // Add more colors as needed
    ],
  };

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setCurrentColorIndex(newValue);
  };

  return (
    <Grid container justifyContent="center" style={{ padding: '20px' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={designData.colors[currentColorIndex].imageUrl}
            alt={designData.colors[currentColorIndex].name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {designData.name} - {designData.colors[currentColorIndex].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Series: {designData.series}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available Meters: {designData.availableMeters}
            </Typography>
            <Slider
              value={currentColorIndex}
              onChange={handleSliderChange}
              max={designData.colors.length - 1}
              step={1}
              marks={designData.colors.map((color, index) => ({
                value: index,
                label: color.name,
              }))}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DesignDashboard;