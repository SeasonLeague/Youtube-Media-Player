import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '100%', sm: '356px', md: '340px' },
      maxWidth: '400px',
      height: { xs: '280px', sm: '300px' },
      margin: 'auto',
      marginTop: marginTop || 0,
      padding: { xs: 2, sm: 0 }
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        textAlign: 'center', 
        color: '#fff',
        padding: { xs: 1, sm: 2 }
      }}> 
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ 
            borderRadius: '50%',
            height: { xs: '140px', sm: '160px', md: '180px' }, 
            width: { xs: '140px', sm: '160px', md: '180px' }, 
            border: '1px solid grey',
            margin: '0 auto',
            mb: 2
          }}
        />
        <Typography 
          variant='h6'
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
