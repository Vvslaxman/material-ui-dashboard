import * as React from 'react';
import {useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {useAppStore} from "../../appStore";
import {db} from "../../firebase-config";
import { useThemeContext } from '../ThemeContext';

import{
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from  "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import Add from './Add';
import Edit from './Edit';
import Skeleton from '@mui/material/Skeleton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [formid, setFormid]=useState("");
  const [editopen,setEditOpen]=useState(false);
  const empCollectionRef=collection(db,"products");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose=()=>setEditOpen(false)
  const handleEditOpen=()=>setEditOpen(true);
  const setRows=useAppStore((state)=>state.setRows);
  const rows=useAppStore((state)=>state.rows);
  const { isDarkMode } = useThemeContext();

  const getUsers=async()=>{
    const data=await getDocs(empCollectionRef);
    setRows(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }

  
  useEffect(()=>{
    getUsers();
  },[]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteUser=(id)=>{
    Swal.fire({
      title:'Are you sure ?',
      text:"You won't be able to revert this !",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtontext:'Yes, delete it !',
    }).then((result)=>{
      if(result.value){
        deleteApi(id);
      }
    });
  };const deleteApi=async(id)=>{
    const userDoc=doc(db,'products',id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted !","Your file has been deleted",'success');
    getUsers();
  };
  const filterData=(v)=>{
    if(v){
      setRows([v]);
    }else{
      setRows([]);
      getUsers();
    }
  }
  const editData=(id,name,price,category)=>{
    const data={
      id:id,
      name:name,
      price:price,
      category:category
    };
    setFormid(data);
    handleEditOpen();
  }

  return (
    <>
    <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
      
      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Add closeEvent={handleClose} isDarkMode={isDarkMode} />
        </Box>
      </Modal>
      <Modal
        open={editopen}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Edit closeEvent={handleEditClose} fid={formid} isDarkMode={isDarkMode}/>
        </Box>
      </Modal>
    </div>
    
    {rows.length > 0 && (
    <Paper sx={{ width: '100%', overflow: 'hidden' , backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>
        <Typography gutterBottom variant='h5' component='div' sx={{padding:'20px'}}>Products List</Typography>
        <Divider />
        <Box height={10}/>
        <Stack direction={{ xs: 'column', sm: 'row' }}  spacing={2} className='my-2 mb-2'>
        <Autocomplete 
        disablePortal
        id="combo-box-demo"
        options={rows}
        sx={{
          width: { xs: '100%', sm: 300 },
          padding: { xs: '8px', sm: 0 },
          '& .MuiAutocomplete-inputRoot': {
            color: isDarkMode ? '#fff' : 'inherit',
          },
          '& .MuiInputLabel-root': {
            color: isDarkMode ? '#fff' : 'inherit',
          },
          '& .MuiSvgIcon-root': {
            fill: isDarkMode ? '#fff' : 'inherit',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: isDarkMode ? '#fff' : 'rgba(0, 0, 0, 0.23)',
          },
          '& .MuiAutocomplete-popper': {
            backgroundColor: isDarkMode ? '#333' : 'inherit',
          },
        }}
        onChange={(e, v) => filterData(v)}
        getOptionLabel={(rows) => rows.name || ""}
        renderInput={(params) => (
          <TextField {...params} size='small' label='Search Products' />
        )}
      />
      <Typography  variant='h6' component='div' sx={{flexGrow:1}}></Typography>
      <Button variant='contained' endIcon={<AddCircleIcon />}  sx={{ width: { xs: '100%', sm: 120 ,md:140,lg:160}, height: { xs: 45, sm: '100%',md:46,lg:47 }, padding: { xs: '18px', sm: 0 } }}onClick={handleOpen}>Add</Button>
        </Stack>
        <Box height={10} />
      <TableContainer sx={{ maxHeight: 420 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
            <TableCell 
                  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
                  align="left"
                  sx={{ minWidth: { xs: "80px", sm: "100px" }, fontWeight:'bold' }}
                 
                >
                  Image
                  
                </TableCell>
              
                <TableCell
                  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
                  align="left"
                  sx={{ minWidth: { xs: "80px", sm: "100px" } , fontWeight:'bold'}}
                >
                  Name
                  
                </TableCell>
                <TableCell
                  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
                  align="left"
                  sx={{ minWidth: { xs: "80px", sm: "100px" } , fontWeight:'bold'}}
                >
                   Price
                  
                </TableCell>
                <TableCell
                  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
                  align="left"
                  sx={{ minWidth: { xs: "80px", sm: "100px" } , fontWeight:'bold'}}
                >
                 Category
                  
                </TableCell>
                <TableCell
                  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
                  align="left"
                  sx={{ minWidth: { xs: "80px", sm: "100px" } , fontWeight:'bold'}}
                >
                 Date
                  
                </TableCell>
                <TableCell
                  style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
                  align="left"
                  sx={{ minWidth: { xs: "80px", sm: "100px" } , fontWeight:'bold'}}
                >
                 Action
                  
                </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    <TableCell key={row.url} align="left">
                        <img src={row.url} alt={row.url} height='40px' width='40px' />
                        </TableCell>
                  
                        <TableCell style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }} key={row.id} align="left">
                        {row.name}
                        </TableCell>
                        <TableCell style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}  key={row.id} align="left">
                        {row.price}
                        </TableCell>
                        <TableCell style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }} key={row.id} align="left">
                        {row.category}
                        </TableCell>
                        <TableCell style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }} key={row.id} align="left">
                        {row.date}
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction='row'>

                          <EditIcon style={{ fontSize: { xs: '18px', sm: '20px' }, color: 'blue', cursor: 'pointer' }} className="cursor-pointer" onClick={() => { editData(row.id, row.name, row.price, row.category); }} />
<DeleteIcon style={{ fontSize: { xs: '18px', sm: '20px' }, color: 'darkred', cursor: 'pointer' }} onClick={() => { deleteUser(row.id) }} />

                        
                        </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10 ,15, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}
        
      />
      <Divider />
      
    </Paper>
    )}
    {rows.length===0 && (
      <>
      <Box height={90} />
      <Paper sx={{width:'98%', overflow:'hidden', padding: '22px'}}>
        <Box height={130} />
        <Skeleton variant='rectangular' width={'100%'}  height={30} />
        <Box height={40} />
        <Skeleton variant='rectangular' width={'100%'}  height={30} />
        <Box height={20} />
        <Skeleton variant='rectangular' width={'100%'}  height={30} />
        <Box height={20} />
        <Skeleton variant='rectangular' width={'100%'}  height={30} />
        <Box height={20} />
        <Skeleton variant='rectangular' width={'100%'}  height={30} />
        <Box height={20} />
        <Skeleton variant='rectangular' width={'100%'}  height={30} />
      </Paper>
      </>
    )}
    </>
  );
  
}