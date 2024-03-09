import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, FormControl, Typography, Divider, InputLabel, TextField, Select, MenuItem, IconButton, InputAdornment } from '@mui/material';
import { useThemeContext } from '../pages/ThemeContext';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Account = () => {
  const [userType, setUserType] = useState('Super Admin');
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkMode } = useThemeContext();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box mt={1} sx={{ width: 850 }} >

      <Card variant="outlined" sx={{ height: '90%', width: '95%', backgroundColor: isDarkMode ? '#333' : '#fff' }} >
        <CardContent  style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            General Settings
          </Typography>
          <Divider />
          <Box mt={2} >
            <Grid container spacing={2}  >
              <Grid item xs={5} >
                <TextField  fullWidth label="Username" variant="outlined" size="small" defaultValue="V.V.S.Laxman"  InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  InputProps={{style: { color: isDarkMode ? '#fff' : '#000' }}}  />
              </Grid>
              <Grid item xs={5} >
                <TextField fullWidth label="Account Email" variant="outlined" size="small" defaultValue="vvslaxman14@gmail.com"  InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  InputProps={{style: { color: isDarkMode ? '#fff' : '#000' }}} />
              </Grid>
              <Grid item xs={5}  >
              
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
              <Grid item xs={5}>
                <TextField fullWidth label="Location" variant="outlined" size="small" defaultValue="Hyderabad"  InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}  InputProps={{style: { color: isDarkMode ? '#fff' : '#000' }}}  />
              </Grid>
            </Grid>
          </Box>
        </CardContent >
      </Card>

      <Box mt={3}  >
        <Card  style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}  variant="outlined" sx={{ height: '100%', width: '95%', backgroundColor: isDarkMode ? '#333' : '#fff' }}  >
          <CardContent  style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}  >
            <Typography variant="h6" gutterBottom fontWeight="bold"  style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
              Change Password
            </Typography>
            <Divider />
            <Box mt={2}  >
              <Grid container spacing={2} >
                <Grid item xs={8} >
                  <TextField
                    fullWidth
                    label="Current Password"
                    variant="outlined"
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}
                    InputProps={{
                      style: { color: isDarkMode ? '#fff' : '#000' },
                      endAdornment: (
                        <InputAdornment position="end" >
                          <IconButton onClick={handleTogglePasswordVisibility} style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }} >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="New Password"
                    variant="outlined"
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}
                    InputProps={{
                      style: { color: isDarkMode ? '#fff' : '#000' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePasswordVisibility} style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }} >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    size="small"
                    type={showPassword ? 'text' : 'password'}
                    InputLabelProps={{style: {color: isDarkMode ? '#fff' : 'inherit'}}}
                    InputProps={{
                      style: { color: isDarkMode ? '#fff' : '#000' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePasswordVisibility} style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }} >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>

  );
};

export default Account;
