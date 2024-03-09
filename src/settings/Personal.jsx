import {React, useState} from 'react';
import {Grid, Box, Card, CardContent, TextField, Typography, MenuItem, Select, FormControl, InputLabel} from '@mui/material';
import {useThemeContext} from '../pages/ThemeContext';

const Personal = () => {
  const {isDarkMode} = useThemeContext();
  const [userType, setUserType] = useState('Super Admin');
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  return (
    <Grid container spacing={-10}>
      {/* Left side */}
      <Grid item xs={8} sm={6}>
        <Box p={1.8} mt={4} sx={{height: '90%', width: '95%'}}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Personal Information
          </Typography>

          <Card variant="outlined" sx={{width: '85%'}}>
            <CardContent sx={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField fullWidth label="Name" defaultValue="V.V.S.Laxman" size="small" InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  InputProps={{readOnly: true, style: {color: isDarkMode ? '#fff' : 'inherit'}}} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Location" defaultValue="Hyderabad" size="small" InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}} InputProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={3} label="Bio" size="small" defaultValue='Passionate about Problem solving,Web dev and ML,looking forward to apply my 
learnings for Real-world scenarios.Proficient in the MERN stack, I have delivered 
numerous basic successful projects in web development. Additionally, I possess 
a strong background in machine learning and have completed projects utilizing 
TensorFlow,Keras.Currently,I am working on functional AI and ML models inte- 
grated web interfaces ' InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  InputProps={{style: { color: isDarkMode ? '#fff' : '#000' }}} />
                </Grid>
                <Grid item xs={12}>
  <FormControl fullWidth size="small" style={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}}>
    <InputLabel style={{color: isDarkMode ? '#fff' : 'inherit'}}>User Type</InputLabel>
    <Select label="User Type" value={userType} onChange={handleUserTypeChange} style={{color: isDarkMode ? '#fff' : 'inherit'}}>
      <MenuItem style={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}} value="Super Admin">Super Admin</MenuItem>
      <MenuItem style={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}} value="Admin">Admin</MenuItem>
      <MenuItem style={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}} value="Manager">Manager</MenuItem>
      <MenuItem style={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}} value="User">User</MenuItem>
    </Select>
  </FormControl>
</Grid>

              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      {/* Right side */}
      <Grid item xs={8} sm={6}>
        <Box p={1.8} mt={4} sx={{height: '90%', width: '100%'}}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Contact Information
          </Typography>

          <Card variant="outlined" sx={{width: '100%'}}>
            <CardContent sx={{backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit'}}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField fullWidth label="Contact Phone" defaultValue="6300903909" size="small"  InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}} InputProps={{readOnly: true, style: {color: isDarkMode ? '#fff' : 'inherit'}}} />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Email" defaultValue="vvslaxman14@gmail.com" size="small" InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  InputProps={{readOnly: true, style: {color: isDarkMode ? '#fff' : 'inherit'}}} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="LinkedIn URL" defaultValue="https://www.linkedin.com/in/v-venkata-sai-laxman-68b8b5263/" size="small"  InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}} InputProps={{readOnly: true, style: {color: isDarkMode ? '#fff' : 'inherit'}}} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={2} label="Address"  size="small" InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  defaultValue=" B3-11 Staff Quarters,JNTUH,Hyd-500085" InputProps={{style: { color: isDarkMode ? '#fff' : '#000' }}}  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personal;
