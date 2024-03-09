import React from 'react';
import { Grid, Box, Card, CardContent, Typography, Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useThemeContext} from '../pages/ThemeContext';
const Profile = () => {
  const { isDarkMode } = useThemeContext();
  return (
    <Grid container spacing={1}  style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
      {/* Left side */}
      <Grid item xs={8} md={6}>
        <Box p={1.5}>
          <Card variant="outlined" sx={{ width: '85%' }} >
            <CardContent sx={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                V.V.S.Laxman
              </Typography>
              
              <Divider />
              <Box mt={2} display="flex" alignItems="center">
                <MailIcon />
                <Box ml={1} sx={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
                  <Typography variant="body1" gutterBottom>
                    vvslaxman14@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box mt={2} display="flex" alignItems="center">
                <PhoneIcon />
                <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                  +91 6300903909
                </Typography>
              </Box>
              <Divider />
              <Box mt={2} display="flex" alignItems="center">
                <LocationOnIcon />
                <Typography variant="body1" gutterBottom sx={{ ml: 1 }}>
                  Hyderabad, Telangana
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      {/* Right side */}
      <Grid item xs={8} md={6} >
        <Box p={1.5}>
          <Card variant="outlined" sx={{ height: '100%',width:'85%' }}>
            <CardContent sx={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                About Me
              </Typography>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Typography variant="body1" gutterBottom>
              Proficient in the MERN stack, I have delivered 
numerous basic successful projects in web development.Currently working on functional AI and ML models inte- 
grated web interfaces 
              </Typography>
              <Box height={10} />
              <Box height={10} />
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Details
              </Typography>
              <Divider />
              
              <Box mt={2}>
                <Typography variant="body1" gutterBottom>
                  <Typography variant="body1" component="span" fontWeight="bold" sx={{ mr: 1 }}>Full Name      <Typography variant="body1" component="span" fontWeight="bold" sx={{ mr: 1 }}>: </Typography> </Typography> Vangala Venkata Sai Laxman
                </Typography>
                <Divider />
                <Typography variant="body1" gutterBottom>
                  <Typography variant="body1" component="span" fontWeight="bold"  sx={{ mr: 1 }}>Father's Name  :</Typography> Mr. V.Ashok
                </Typography>
                <Divider />
                <Typography variant="body1" gutterBottom>
                  <Typography variant="body1" component="span" fontWeight="bold"  sx={{ mr: 1 }}>Address :</Typography> B3-11 Staff Quarters,JNTUH,Hyd
                </Typography>
                <Divider />
                <Typography variant="body1" gutterBottom>
                  <Typography variant="body1" component="span" fontWeight="bold"  sx={{ mr: 1 }}>Zip Code :</Typography> 500085
                </Typography>
                <Divider />
                <Typography variant="body1" gutterBottom>
                  <Typography variant="body1" component="span" fontWeight="bold"  sx={{ mr: 1 }}>Website:</Typography> <a  style={{color:'#0c828f'}} href="https://vvslaxman.github.io/demo-centella-scientific/"  >https://vvslaxman14.com</a>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
