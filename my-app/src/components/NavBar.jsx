import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import {makeStyles} from '@mui/styles';
import { NavLink } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

const useStyle = makeStyles({
    header:{
       backgroundColor : 'teal'
    },
    tabs : {
        color:'white',
        textDecoration:'none',
        marginRight :'10px'
    }
})

const NavBar = () => {
    const classes=useStyle();
    return(
        <AppBar className={classes.header} position="static">
            <ToolBar>
                <NavLink className={classes.tabs} to="./" exact> User Registration </NavLink>
                <NavLink className={classes.tabs}to="all" exact> All Users </NavLink>
                <NavLink className={classes.tabs}to="add" exact> Add User </NavLink>

            </ToolBar>
        </AppBar>
    )
}

export default NavBar;