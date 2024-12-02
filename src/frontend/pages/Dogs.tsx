import { Box, Typography } from '@mui/material';


const Dogs = () => {
  console.log('Dogs page rendered');
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dogs
      </Typography>
      <Typography variant="body1">
        Welcome to the Dog Page!
      </Typography>
    </Box>
  );
};

export default Dogs;