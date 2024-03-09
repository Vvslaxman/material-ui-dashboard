import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useThemeContext } from '../pages/ThemeContext';

const AccordionDash = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <div>
      <Accordion
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '100%', 
            md: 400,    
            lg: 600,    
          },
          margin: 'auto', 
          backgroundColor: isDarkMode ? '#000' : 'inherit', 
          color: isDarkMode ? '#fff' : 'inherit',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Mobiles
        </AccordionSummary>
        <AccordionDetails>
          In mobile phones, we check the weather, read the news, communicate with friends, learn, work, count calories, entertain ourselves, listen to music, and create!
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: {
            xs: '100%', 
            sm: '100%', 
            md: 400,    
            lg: 600,    
          },
          margin: 'auto', 
          marginTop: 2,
          backgroundColor: isDarkMode ? '#000' : 'inherit', 
          color: isDarkMode ? '#fff' : 'inherit',  
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Laptops
        </AccordionSummary>
        <AccordionDetails>
          A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: {
            xs: '100%',
            sm: '100%', 
            md: 400,   
            lg: 600,   
          },
          margin: 'auto', 
          marginTop: 2, 
          backgroundColor: isDarkMode ? '#000' : 'inherit', 
          color: isDarkMode ? '#fff' : 'inherit', 
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Electronics
        </AccordionSummary>
        <AccordionDetails>
          An Electronic device is a piece of hardware that receives information from a computer and converts it into something else.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionDash;
