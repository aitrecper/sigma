import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../../public/Sigmafront.png";
import { Button, Layout, Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";



const { Header } = Layout;

interface HeaderProps {
  onLogin: () => void;
  onLogout: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = (props: HeaderProps) => {
  const location = useLocation();

  const [isLogged, setIsLogged] = useState(false);

  const handleAuthClick = () => {
    if (isLogged) {
      props.onLogout();
      setIsLogged(false);
    } else {
      props.onLogin();
      setIsLogged(true);
    }
  };

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const defaultSelectedKeys = ["1"];
  if (location.pathname.startsWith("/animales")) {
    defaultSelectedKeys.push("5");
  }

  return (
    <Header className="headerinside" style={{ backgroundColor: "#9EB9D4", height:"64px", padding:"0px" }}>
      <div className="logo">
        <img src={logo} alt="Logo de tu sitio web" width="97" height="30"
         />
      </div>
      <Menu
        theme="light"
        // mode="vertical"
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={[location.pathname]}
        style={{ width: "40vh", padding:"0px", height:"120vh" }}
      >
       
       <Menu.Item key="1">
          <Button
            type="primary"
            onClick={handleAuthClick}
            icon={<UserOutlined />}
          >
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </Button>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/" >
            Inicio
          </Link>
        </Menu.Item>
        <Menu.Item key="3" >
          Acerca de
        </Menu.Item>
        <Menu.Item key="4" >
          Contacto
        </Menu.Item>
        




{/* CADA CATEGORIA, IGUAL */}



{/* ANIMALES */}
<Menu.SubMenu
          key="5"
          title={
            <span>
             
              
              <span>Animales</span>
            </span>
          }
          onClick={handleMenuClick}
          open={openMenu}
        >
          <Menu.Item key="/animales/alta">
            <Link to="/animales/alta">Dar de alta</Link>
          </Menu.Item>
          <Menu.Item key="/">
            <Link to="/">Dar de baja</Link>
          </Menu.Item>
          <Menu.Item key="/">
            <Link to="/">Registros</Link>
          </Menu.Item>
          <Menu.Item key="/animales/adopcion">
            <Link to="/animales/adopcion">Adopción</Link>
          </Menu.Item>
        </Menu.SubMenu>


{/* ADMINISTRACION */}
        <Menu.SubMenu
          key="6"
          title={
            <span>
              <SettingOutlined />
              <span>Administracion</span>
            </span>
          }
          onClick={handleMenuClick}
          open={openMenu}
        >
          <Menu.Item key="/administracion/cuidadores">
            <Link to="/administracion/cuidadores">Cuidadores</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/facturacion">
            <Link to="/administracion/facturacion">Facturación</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/contabilidad">
            <Link to="/administracion/contabilidad">Contabilidad</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/inventario">
            <Link to="/administracion/inventario">Inventario</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/usuarios">
            <Link to="/administracion/usuarios">Usuarios</Link>
          </Menu.Item>
        </Menu.SubMenu>



        
{/* A MODIFICAR */}
        <Menu.SubMenu
          key="7"
          title={
            <span>
              <SettingOutlined />
              <span>Veterinario</span>
            </span>
          }
          onClick={handleMenuClick}
          open={openMenu}
        >
          <Menu.Item key="/veterinario">
            <Link to="/veterinario">Formulario</Link>
          </Menu.Item>
          <Menu.Item key="/veterinario">
            <Link to="/veterinario">Gestiones</Link>
          </Menu.Item>
          <Menu.Item key="/veterinario">
            <Link to="/veterinario">Facturas</Link>
          </Menu.Item>
        </Menu.SubMenu>


{/* A MODIFICAR */}
        <Menu.SubMenu
          key="8"
          title={
            <span>
              <SettingOutlined />
              <span>Familia</span>
            </span>
          }
          onClick={handleMenuClick}
          open={openMenu}
        >
          <Menu.Item key="/administracion/cuidadores">
            <Link to="/administracion/cuidadores">Gestion</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/facturacion">
            <Link to="/administracion/facturacion">Adopción</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/contabilidad">
            <Link to="/administracion/contabilidad">Formulario de contacto"</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/inventario">
            <Link to="/administracion/inventario">Contratos</Link>
          </Menu.Item>
        </Menu.SubMenu>

{/* A MODIFICAR */}
        <Menu.SubMenu
          key="9"
          title={
            <span>
              <SettingOutlined />
              <span>Voluntarios</span>
            </span>
          }
          onClick={handleMenuClick}
          open={openMenu}
        >
          <Menu.Item key="/administracion/cuidadores">
            <Link to="/administracion/cuidadores">Form. Registro</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/facturacion">
            <Link to="/administracion/facturacion">List. Voluntarios</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/contabilidad">
            <Link to="/administracion/contabilidad">Contabilidad</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/inventario">
            <Link to="/administracion/inventario">Inventario</Link>
          </Menu.Item>
          <Menu.Item key="/administracion/usuarios">
            <Link to="/administracion/usuarios">Usuarios</Link>
          </Menu.Item>
        </Menu.SubMenu>

        
{/* A MODIFICAR */}
<Menu.SubMenu
          key="10"
          title={
            <span>
              <SettingOutlined />
              <span>Calendario</span>
            </span>
          }
          onClick={handleMenuClick}
          open={openMenu}
        >
         
        </Menu.SubMenu>

      </Menu>
    </Header>
  );
};

export default HeaderComponent;