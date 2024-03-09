import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import List from '../settings/List';
import { useThemeContext } from './ThemeContext';

export default function Settings() {
    const { isDarkMode } = useThemeContext();

    return (
        <>
        <div  bgcolor={"background.default"} color={"text.primary"} style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
         <Navbar />
        <Box height={80} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <List />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                   
        
                </Box>
            </Box>
            </div>
        </>
       
    )
}