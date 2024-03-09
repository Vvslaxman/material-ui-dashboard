import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import { useThemeContext } from './ThemeContext';
import Navbar from '../components/Navbar';
import ProductList from './products/ProductList';

export default function Products() {
    const { isDarkMode } = useThemeContext();
    return (
        <>
        <div  bgcolor={"background.default"} color={"text.primary"}  style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
         <Navbar />
        <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <ProductList  isDarkMode={isDarkMode}/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                   
                
        
                </Box>
            </Box>
            </div>
        </>
       
    )
}