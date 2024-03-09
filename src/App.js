import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Profile from "./settings/Profile";
import Account from "./settings/Account";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
     
      <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
      <BrowserRouter>
          <Routes>
          
            <Route path ="/" exact element={<Home setMode={setMode} mode={mode}/>}></Route>
            <Route path ="/products" exact element={<Products setMode={setMode} mode={mode}/>}></Route>
            <Route path ="/analytics" exact element={<Analytics setMode={setMode} mode={mode} />}></Route>
            <Route path ="/settings" exact element={<Settings setMode={setMode} mode={mode}/>}></Route>
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/account" element={<Account />} />
          </Routes>

        </BrowserRouter>
      </Box>
    </ThemeProvider>



  )
  
}

