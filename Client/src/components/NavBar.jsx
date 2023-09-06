import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { useNavigate } from "react-router-dom";

import Button from "./Button";

import { APP_NAME, ROUTES } from "../constants";
import Title from "./Title";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ px: "40px" }} position="static">
        <Toolbar>
          <Title
            variant="h6"
            component="div"
            style={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate(ROUTES.HOME)}>
            {APP_NAME}
          </Title>
          <Button
            color="inherit"
            style={{ marginRight: "5px" }}
            handleClick={() => navigate(ROUTES.AUTH.LOGIN)}>
            Login
          </Button>
          <Button
            color="inherit"
            style={{ marginRight: "5px" }}
            handleClick={() => navigate(ROUTES.AUTH.REGISTER)}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
