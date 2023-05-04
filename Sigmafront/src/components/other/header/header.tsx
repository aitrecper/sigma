import React from "react";
import "./header.css";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../../../public/Sigmafront.png";
import { Button, ButtonProps, Stack } from "@mui/material";

import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { amber, common, purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#03045E',
  borderColor: '#03045E',
  fontFamily: [
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ].join(','),
  '&:hover': {
    backgroundColor: '#03045E',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#03045E',
  },
});



const theme = createTheme({
  palette: {
    primary: {
      main: "#050505",
    },
}});

interface HeaderProps {
  isLogged: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

function Header(props: HeaderProps) {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (props.isLogged) {
      props.onLogout();
      navigate('/');
    } else {
      props.onLogin();
      navigate('/loged');
    }
  };
  return (
    <div className="headerinside">
      <header>
        <img className="logo" src={logo} alt="Logo de tu sitio web" width="89" height="30" />
        <nav>
          <ul>
            <li>
            <ThemeProvider theme={theme}>
            <Button variant="text" color="primary" href="/home">Inicio</Button>
            </ThemeProvider>
            </li>
            <li>
            <ThemeProvider theme={theme}>
            <Button variant="text" color="primary">Acerca de</Button>
            </ThemeProvider>
            </li>
            <li>
            <ThemeProvider theme={theme}>
            <Button variant="text" color="primary">Contacto</Button>
            </ThemeProvider>
            </li>
            <li>
              <BootstrapButton variant="contained" onClick={handleAuthClick}>
              {props.isLogged ? "Cerrar sesión" : "Iniciar sesión"}
            </BootstrapButton>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;


