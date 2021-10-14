import { useEffect, useState } from "react";
import axios from "axios";
import {Table,TableBody,TableCell,TableHead,TableRow,Button,TableContainer} from '@mui/material';
import Paper from '@mui/material/Paper';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
  table: {
      width: '600px',
      margin: '50px 0 0 50px',
     
      align:'center'
  },
  thead: {
      '& > *': {
          fontSize: 20,
          backgroundColor: '#000000',
          color: '#FFFFFF'
      }
  },
  row: {
      '& > *': {
          paddingLeft:'2px',
          fontSize: 12
      }
  }
})

const AllUsers =() =>{
  const classes = useStyles();
  const[users,setUsers]=useState([]);
  useEffect(()=>{
  axios.get('http://localhost:8000/users/read')
  .then((response)=>{
    console.log(response)
    setUsers(response.data)
  })
  },[])

 
const updateUser=(id)=>{

const newUserName=prompt("Enter new username ")
const newEmail=prompt("Enter new email ")
const newPhone=prompt("Enter new Phone no ")

  axios.put('http://localhost:8000/users/update', { username: newUserName, email: newEmail, phone: newPhone ,id:id}).then(()=>{
    setUsers(users.map((val)=>{
      return val._id==id?{_id:id,name:val.name,username:newUserName,email:newEmail,phone:newPhone}:val
    }))
  });
}

const deleteUser=(id)=>{
axios.delete(`http://localhost:8000/users/delete/${id}`).then(()=>{
  setUsers(users.filter((val)=>{
    return val._id != id;
  }))
})
}

    return(
        // <p> Hi am user</p>
       
         <Table classname={classes.table}>
        <TableHead >
          <TableRow classname={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Username</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >PhoneNo</TableCell>
          </TableRow>
        </TableHead>
        {
            users.map((user,key)=>(
                <TableBody>
                  
                    <TableRow classname={classes.row}>
                        <TableCell>{key+1}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                      
                        <TableCell>
                            <Button color="primary"variant="contained" style={{marginRight:10}} onClick={()=>updateUser(user._id)}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={()=>deleteUser(user._id)} >Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                        
                    </TableRow>
                </TableBody>
            ))
        }
       
      </Table>
      
    )
}
// component={Link} to={`/edit/${user._id}`}
export default AllUsers;