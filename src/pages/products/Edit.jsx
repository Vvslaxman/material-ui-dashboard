import react from 'react';
import {useState,useEffect,useRef} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Typography,Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import {useAppStore} from "../../appStore"
import {db} from "../../firebase-config";
import {pImg,storage} from '../../firebase-config';
import {v4} from 'uuid';
import { useThemeContext } from '../ThemeContext';
import {getDownloadURL,ref, uploadBytes} from 'firebase/storage';
import{
  collection,
  getDocs,

  updateDoc,
  doc,

 
} from "firebase/firestore";
export default function Edit({fid,closeEvent}) {
  const [img,setImg]=useState('');
    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    const [category,setCategory]=useState("");
    
    const setRows=useAppStore((state)=>state.setRows);
    const empCollectionRef=collection(db,"products");
    const { isDarkMode } = useThemeContext();
    
    useEffect(()=>{
        console.log("FID: "+ fid.id);
        setName(fid.name);
        setPrice(fid.price);
        setCategory(fid.category);
    },[]);

    const getUsers=async()=>{
      const data=await getDocs(empCollectionRef);
      setRows(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }

    const handleNameChange=(event)=>{
        setName(event.target.value);
    };
    const handlePriceChange=(event)=>{
        setPrice(event.target.value);
    };
    const handleCategoryChange=(event)=>{
        setCategory(event.target.value);
    };
    const createUser=async()=>{
        const userDoc=doc(db,'products',fid.id);
        const newFields={
            url:img,
            name:name,
            price:Number(price),
            category:category,
            date:String(new Date()),
        }        
      await updateDoc(userDoc,newFields);
      getUsers();
      closeEvent();
      Swal.fire("Submitted !", "Your file has been submitted.","success");

    };
    const [imgName, setImgName] = useState("");
    const inputRef = useRef(null); 
    const handleClick = () => {
      inputRef.current.click(); 
    };

    const handleUpload = (e) => {
      const file = e.target.files[0];
      console.log(file); 
      
      const imgs = ref(pImg, `Imgs/${v4()}`);
      uploadBytes(imgs, file).then(data => {
        console.log(data, 'Product Images');
        getDownloadURL(data.ref).then(val=>{
          setImg(val);
          setImgName(file.name); 
        });
      }).catch(error => {
        console.error('Error uploading file:', error);
      });
    };
    
    const currencies = [
        {
          value: 'Mobile',
          label: 'Mobile',
        },
        {
          value: 'Laptop',
          label: 'Laptop',
        },
        {
          value: 'Electronics',
          label: 'Electronics',
        },
        {
          value: 'Food',
          label: 'Food',
        },
      ];
    return (
        <>
        <Box sx={{m:2}} />
        <Typography  sx={{fontWeight:'bold',color:'#0c828f'}}variant='h5' align='center'>Delete Product</Typography>
        <IconButton style={{position:'absolute',top:'0',right:'0'}}
        onClick={closeEvent}>
            <CloseIcon />
        </IconButton>
        <Box height={20} />
        <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField id="outlined-basic" label="Name" variant="outlined" size='small' onChange={handleNameChange} value={name} sx={{minWidth:'100%'}} />
        </Grid>
         <button      
        style={{
          padding: '5px 10px', 
          fontSize: '13px',    
          marginLeft: '15px', 
          marginTop:'15px',
          height:'41px',
          width:'80px'  
        }}  onClick={handleClick}>Choose File</button>
      <input
        type='file'
        style={{
          display: 'none', 
        }}
        onChange={(e) => handleUpload(e)}
        ref={inputRef} 
      />
      {imgName && <p>Uploaded Image: {imgName}</p>}
  
        <Grid item xs={6}>
            <TextField id="outlined-basic" label="Price" variant="outlined"  type='number' 
                  InputProps={{ startAdornment:(
                    <InputAdornment position="start">
                     <CurrencyRupeeIcon />
                    </InputAdornment>
    ),}}
                  size='small' onChange={handlePriceChange} value={price} sx={{minWidth:'100%'}} />
        </Grid>
        <Grid item xs={6}>
            <TextField id="outlined-basic" select  label="Category" variant="outlined" size='small'  onChange={handleCategoryChange} value={category} sx={{minWidth:'100%'}} >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} </TextField>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h5' align='center'>
                <Button variant='contained' onClick={createUser}>Submit</Button>
            </Typography>
        </Grid>

        </Grid>
        <Box sx={{m:4}} />
        
        </>
        
    )
}
