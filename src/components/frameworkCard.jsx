import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function FrameworkCard({ name, describtion, imagePath }) {
  return (
    <Card sx={{ maxWidth: 200, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ height: '140px', width: 'auto' }}
          image="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {describtion}
          </Typography>
          <CardActions>
            <Link to="/learn-more">
              {' '}
              {/* Link to the "Learn More" page */}
              <Button>Learn More</Button>
            </Link>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
