import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import  "../Dash.css";
import CountUp from 'react-countup';
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import Hbarchart from "../charts/Hbarchart";
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import { useThemeContext } from './ThemeContext';

const Analytics=()=>{
  
  const { isDarkMode } = useThemeContext();

    return (
        <>
         <div   bgcolor={"background.default"} color={"text.primary"}  style={{ backgroundColor: isDarkMode ? '#000' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
        <Navbar />
        <Box height={70} /> 
            <Box sx={{ display: 'flex' }} >
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 1 }} bgcolor={"background.default"} color={"text.primary"} style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
                <Grid container spacing={2} >
                  <Grid item xs={5} >
                    <Stack direction ='row' spacing={2} >
                      <Box sx={{width:'50%'}} > 
                      <Card sx={{height:19+'vh' ,background: 'rgb(45, 31, 115)' }} >
                        <CardContent >
                          <Typography gutterBottom variant='p' component='div' sx={{color:'#f0fcfc',padding:'6px 0px'}}>
                            Visitors
                          </Typography>
                          <Typography gutterBottom variant="h7" component ='div'sx={{color:'#f0fcfc'}}><CountUp delay={0.2} end={22000} duration={0.8} /></Typography>
                          <Typography variant="body2" color='text.secondary' sx={{color:'#ccd1d1'}}>Since last week</Typography>

                        </CardContent>
                        </Card>
                        
                         <Card sx={{height:19+'vh' , marginTop:'16px', background: '#25951f' }}>
                        <CardContent>
                          <Typography gutterBottom variant='p' component='div' sx={{color:'#f0fcfc',padding:'6px 0px'}}>
                            Visitors
                          </Typography>
                          <Typography gutterBottom variant="h7" component ='div'sx={{color:'#f0fcfc'}}><CountUp delay={0.4} end={32000} duration={0.8} /></Typography>
                          <Typography variant="body2" color="text.secondary" sx={{color:'#ccd1d1'}}>Since last week</Typography>
                        </CardContent>
                        
                        </Card></Box>
                     <Box sx={{width:'50%',height:'50%'}}>
                        <Card sx={{height:19 + 'vh',background: 'rgb(45, 31, 115)'}} >
                          <CardContent>
                          <Typography gutterBottom variant='p' component='div' sx={{color:'#f0fcfc',padding:'6px 0px'}}>
                            Visitors
                          </Typography>
                          <Typography gutterBottom variant="h7" component ='div'sx={{color:'#f0fcfc'}}><CountUp delay={0.2} end={12000} duration={0.8} /></Typography>
                          <Typography variant="body2" color="text.secondary" sx={{color:'#ccd1d1'}}>Since last week</Typography>
                          </CardContent>
                        </Card>
                        <Card sx={{height:19+'vh' , marginTop:'16px', background: '#25951f' }}>
                        <CardContent>
                          <Typography gutterBottom variant='p' component='div' sx={{color:'#f0fcfc',padding:'6px 0px'}}>
                            Visitors
                          </Typography>
                          <Typography gutterBottom variant="h7" component ='div'sx={{color:'#f0fcfc'}}><CountUp delay={0.4} end={22500} duration={0.8} /></Typography>
                          <Typography variant="body2" color="text.secondary" sx={{color:'#ccd1d1'}}>Since last week</Typography>
                        </CardContent>
                        </Card>

                     </Box>
                    </Stack>
                    </Grid>
                    <Grid item xs={7}>
                      <Card sx={{height:40 + "vh"}}>
                        <CardContent><Hbarchart isDarkMode={isDarkMode} /></CardContent>
                      </Card>
                    </Grid>
                    </Grid>
                    <Box height={16} />
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <Card sx={{height:40 + "vh"}}>
                          <CardContent><GeoChart isDarkMode={isDarkMode}/></CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={4}>
                      <Card sx={{height:40 + "vh"}}>
                        <CardContent><PieChart isDarkMode={isDarkMode}/></CardContent>
                      </Card>
                    </Grid>
                    </Grid>

{/*                <Stack spacing={2} direction="column">
                  
                    <Grid item xs={6} >
                    <Stack spacing={2} direction="row">
                    <Card sx={{ minWidth: 129 + "%",height : 120,background: 'rgb(45, 31, 115)' }} className="gradient" >

      <CardContent>
        
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          Visitors
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          $24,640
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ccd1d1"}}>
          Since last week
        </Typography>

      </CardContent>

    </Card>
    <Card sx={{ minWidth: 129 + "%",height : 120 ,background:'#25951f'}} className="gradient" >

      <CardContent>
        
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          Visitors
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          $24,640
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ccd1d1"}}>
          Since last week
        </Typography>

      </CardContent>

    </Card>

    </Stack>
    </Grid>
    
    <Grid item xs={6} >
                    <Stack spacing={2} direction="row">
                    <Card sx={{ minWidth: 129 + "%",height : 120,background: 'rgb(45, 31, 115)' }} className="gradient" >

      <CardContent>
        
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          Visitors
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          $24,640
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ccd1d1"}}>
          Since last week
        </Typography>

      </CardContent>

    </Card>
    <Card sx={{ minWidth: 129 + "%",height : 120 ,background:'#25951f'}} className="gradient" >

      <CardContent>
        
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          Visitors
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ffffff"}}>
          $24,640
        </Typography>
        <Typography gutterBottom variant="body3" component="div" sx={{color:"#ccd1d1"}}>
          Since last week
        </Typography>

      </CardContent>

    </Card>

    </Stack>
    </Grid>
    <Box height={20} />
    </Stack>
    <Box height={30} />
    <Box height={30} />
    
    
    <Grid container spacing={2}>
   
       
                    <Grid item xs={300} >
                    <Stack spacing={2} direction="row" >
                    <Card sx={{ height:55 + "vh" ,minWidth:415}}>
                    
                      <CardContent>
                         <GeoChart />             

                      </CardContent>
                      
                    
                      </Card>
                      
                      
                      <Grid item xs={20} >
                    <Card sx={{ height:55 + "vh" ,minWidth:45 }}>
                    
                      <CardContent>
                         <PieChart />             

                      </CardContent>
                      
                    
                      </Card>
                      </Grid>
                      </Stack>
                      
                      </Grid>
                      
    </Grid> */}
                      
  
                
    
    


    </Box>
    </Box>










    </div>
      
            
        </>
       
    )
}
export default Analytics;