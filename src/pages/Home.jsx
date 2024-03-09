import React,{useState} from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import AccordionDash from '../components/AccordionDash';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  "../Dash.css";
import CountUp from 'react-countup';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BarChart from "../charts/BarChart";
import { useThemeContext } from './ThemeContext';


export default function Home({mode}) {
  const { isDarkMode } = useThemeContext();
  const [setSearchResults] = useState([]); 

  const handleSearch = (query) => {
   
    const results = ['Home', 'Analytics', 'Products', 'Settings',].filter(word =>
        word.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
};
    return (
        <>
        
        <div  bgcolor={"background.default"} color={"text.primary"} style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
        <Navbar handleSearch={handleSearch} />
        <Box 
          height={70} color={"text.primary"} p={3} />
            <Box sx={{ display: 'flex' }} >
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 2, p: 1}} >
                <Grid container spacing={2} >
                    <Grid item xs={8} >
                    <Stack spacing={2} direction="row">
                    <Card sx={{ minWidth: 49 + "%",height : 150,
        background: 'rgb(45, 31, 115)' }} >

      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
          <CreditCardIcon />
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
          $<CountUp delay={0.2} end={500.00} duration={0.5} />
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
          Total Earnings
        </Typography>

      </CardContent>

    </Card>
    
    <Card sx={{ background:'#25951f',minWidth: 49 + "%",height : 150  }} >

      <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{display:'inline',color:"#ffffff"}}>
          <ShoppingBagIcon />
        </Typography>
      <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
      $<CountUp delay={0.2} end={900.00} duration={0.5}  />
        </Typography>
        <Typography gutterBottom variant="body2"  component="div" sx={{display:'inline', color:"#ccd1d1"}}>
          Total Order
        </Typography>

      </CardContent>

      </Card>
      </Stack>      
            </Grid>
            <Grid item xs={4} >
            <Stack spacing={2} >
            <Card sx={{background:'#25951f'}}>

              
<Stack spacing={2} direction="row" >
              <div className="iconstyle">
              <StorefrontIcon />
              </div>
                
             <div className="paddingall" >
             <span style={{display:'inline',color:'white'}}>$203K</span>
             <br/>
              <span className="pricesubtitle" style={{display:'inline',color:'#ccd1d1'}}>Total Income</span>
             </div>
             </Stack>
              

            </Card>

            <Card >
                
            
            <Stack spacing={2} direction="row" style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
              <div className="iconstyleblack">
              <StorefrontIcon />
              </div>
                
             <div className="paddingall"  style={{display:'inline'}}>
             <span className="pricetitle"  style={{display:'inline'}}>$203K</span>
             <br/>
              <span className="pricesubtitle" style={{display:'inline'}}>Total Income</span>
             </div>
             </Stack>
            
                
            </Card>
            </Stack>
                  </Grid>
                </Grid>
                <Box height={20} />
                <Grid container spacing={2}>
                    <Grid item xs={8} >
                    <Card sx={{ height: 60 + "vh" }} style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}> 

                      <CardContent style={{ backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
                         <BarChart  isDarkmode={isDarkMode} />             

                      </CardContent>

                      </Card>
                      </Grid>
                      <Grid item xs={4} >
                      <Card sx={{ height: 60+'vh' }}  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>

                      <CardContent>
                      <div className="paddingall">
             <Typography component="span" fontWeight='bold' >Popular Products </Typography>

             </div>
             <Box height={10} />
                      
             <AccordionDash isDarkMode={isDarkMode} />
                      </CardContent>

                      </Card>
                    </Grid>
                </Grid>

        
                </Box>
                      </Box>
        </div>


                  </>
       
    )
}