import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import Button from './Button';

import { APP_NAME, ROUTES} from "../constants"

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ px:"40px"}} position="static">
        <Toolbar>
          
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, ":hover": {cursor: "pointer" }}}
          onClick={()=> navigate(ROUTES.HOME)}>
           {APP_NAME}
          </Typography>
          <Button 
          color="inherit"
          style={{ marginRight: "5px"}}
          onClick={() => navigate(ROUTES.AUTH.LOGIN)}>
            Login
        
          </Button>
          <Button 
          color="inherit"
          style={{ marginRight: "5px"}}
          onClick={() => navigate(ROUTES.AUTH.REGISTER)}>
            Register
        
          </Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar