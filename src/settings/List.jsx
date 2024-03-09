import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Personal from './Personal';
import Profile from './Profile';
import Account from './Account';
import { useThemeContext } from '../pages/ThemeContext';
  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: '#0c828f',
      fontweight:'400',
      '&.Mui-selected': {
        color: '#0c828f',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#30c1d1',
      },
    }),
  );

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function List() {
  const [value, setValue] = React.useState(0);
  const { isDarkMode } = useThemeContext();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ width: 1100,height:550 ,xs:'none',sm:'block', backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
    <CardContent>
    <Box sx={{ width: 990 ,height:450, backgroundColor: isDarkMode ? '#333' : 'inherit', color: isDarkMode ? '#fff' : 'inherit' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="Profile" {...a11yProps(0)} />
          <StyledTab label=" Personal Details" {...a11yProps(1)} />
          <StyledTab label="My Account" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Profile isDarkMode={isDarkMode} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Personal isDarkMode={isDarkMode}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Account isDarkMode={isDarkMode}/>
      </CustomTabPanel>
    </Box>
    </CardContent>
    </Card>
  );
}
