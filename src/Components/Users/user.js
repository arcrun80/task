
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function User({user}) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {user.name} 
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {user.description} 
          </Typography> 
      </CardContent>
    </Card>
  );
}