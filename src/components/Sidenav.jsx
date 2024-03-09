import  React,{useState} from 'react';
import { styled, useTheme , createTheme,ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ModeNight from '@mui/icons-material/ModeNight';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import {useAppStore} from '../appStore';
import {useNavigate} from "react-router-dom";
import { useThemeContext } from '../pages/ThemeContext';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
  },
});

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidenav=({ mode, toggleMode }) => {
  const theme = useTheme();
  const navigate=useNavigate();
  const open=useAppStore((state) => state.dopen );
  const { isDarkMode, toggleDarkMode } = useThemeContext();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>

    <Box flex={1} p={1} sx={{ display: { xs: "none", sm: "block" } }} bgcolor={"background.default"} color={"text.primary"}>
      <CssBaseline />
      <Box height={30} />
     <Drawer variant="permanent" open={open}>
       <DrawerHeader>
       <IconButton >
            {theme.direction === 'rtl' ? (<ChevronRightIcon /> ):( <ChevronLeftIcon />)}
          </IconButton>
       </DrawerHeader>
          
        
        <Divider />
        <List sx={{ width: '100%', maxWidth: 360, }}>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon /> 
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/products")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PeopleIcon /> 
                </ListItemIcon>
                <ListItemText primary="Products" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/analytics")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AnalyticsIcon /> 
                </ListItemIcon>
                <ListItemText primary="Analytics" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}  onClick={()=>{navigate("/settings")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SettingsIcon /> 
                </ListItemIcon>
                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              
              <Switch  sx={{ marginLeft: 2 }}  checked={isDarkMode} onChange={toggleDarkMode} />
              
            </ListItemButton>
          </ListItem>
        </List>
    
        
      </Drawer>

    </Box>
    </ThemeProvider>
  );
};
export default Sidenav;
