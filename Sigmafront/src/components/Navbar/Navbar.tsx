// import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DeleteIcon from '@mui/icons-material/Delete';
// import PetsIcon from '@mui/icons-material/Pets';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import ArticleIcon from '@mui/icons-material/Article';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import PersonIcon from '@mui/icons-material/Person';
// import CalculateIcon from '@mui/icons-material/Calculate';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import HealingIcon from '@mui/icons-material/Healing';
// import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import AddIcon from '@mui/icons-material/Add';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   //cabezeras
//   const [openAnimales, setOpenAnimales] = React.useState(false);
//   const [openAdministracion, setOpenAdministracion] = React.useState(false);
//   const [openVeterinario, setOpenVeterinario] = React.useState(false);
//   const [openFamilia, setOpenFamilia] = React.useState(false);
//   const [openVoluntarios, setOpenVoluntarios] = React.useState(false);
//   const [openInventario, setOpenInventario] = React.useState(false);
  
//   const handleClickAnimales = () => {
//     setOpenAnimales(!openAnimales);
//   };

//   const handleClickAdministracion = () => {
//     setOpenAdministracion(!openAdministracion);
//   };

//   const handleClickVeterinario = () => {
//     setOpenVeterinario(!openVeterinario);
//   }
  
//   const handleClickFamilia = () => {
//     setOpenFamilia(!openFamilia);
//   };

//   const handleClickVoluntarios = () => {
//     setOpenVoluntarios(!openVoluntarios);
//   };
//     const handleClickInventario = () => {
//     setOpenInventario(!openInventario);
//   };

//   return (
//         <div className="barralateral">

//     <List
//       sx={{ width: '100%', maxWidth: 360}}
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//     >
//       <ListItemButton onClick={handleClickAnimales}>
//         <ListItemIcon>
//           <PetsIcon />
//         </ListItemIcon>
//         <ListItemText primary="Animales" />
//         {openAnimales ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={openAnimales} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <AddIcon />
//             </ListItemIcon>
//             <Link to="/animales/alta">
//             <ListItemText primary="Dar de alta" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <DeleteIcon />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Dar de baja" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <ArticleIcon />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Registros" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <VolunteerActivismIcon />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Adopción" /></Link>
//           </ListItemButton>

//         </List>
//       </Collapse>
//       <ListItemButton onClick={handleClickAdministracion}>
//         <ListItemIcon>
//           <AdminPanelSettingsIcon />
//         </ListItemIcon>
//         <ListItemText primary="Administración" />
//         {openAdministracion ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
      
//       <Collapse in={openAdministracion} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <PersonIcon />
//             </ListItemIcon>
//             <Link to="/administracion/cuidadores">
//             <ListItemText primary="Cuidadores" /></Link>
//           </ListItemButton>
//           {/* <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <ReceiptIcon />
//             </ListItemIcon>
//             <Link to="/administracion/facturacion">
//             <ListItemText primary="Facturas" /></Link>
//           </ListItemButton> */}
//           {/* <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <CalculateIcon />
//             </ListItemIcon>
//             <Link to="/administracion/contabilidad">
//             <ListItemText primary="Contabilidad" /></Link>
//           </ListItemButton> */}
//           {/* <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <InventoryIcon />
//             </ListItemIcon>
//             <Link to="/administracion/inventario">
//             <ListItemText primary="Inventario" /></Link>
//           </ListItemButton>           */}
//           {/* <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <AccountBoxIcon />
//             </ListItemIcon>
//             <Link to="/administracion/usuarios">
//             <ListItemText primary="Usuarios" /></Link>
//           </ListItemButton> */}
//         </List>
//       </Collapse>

//       <ListItemButton onClick={handleClickVeterinario}>
//         <ListItemIcon>
//           <HealingIcon />
//         </ListItemIcon>
//         <ListItemText primary="Veterinario" />
//         {openVeterinario ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={openVeterinario} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <AssignmentIcon />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Formulario" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Gestiones" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <LocalHospitalIcon />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Urgencias" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <ReceiptIcon />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Facturas" /></Link>
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <ListItemButton onClick={handleClickFamilia}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Familia" />
//         {openFamilia ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={openFamilia} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Gestion" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Adopción" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Formulario de contacto" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Contratos" /></Link>
//           </ListItemButton>       
//         </List>
//       </Collapse>
//           <ListItemButton onClick={handleClickVoluntarios}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Voluntarios" />
//         {openVoluntarios ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={openVoluntarios} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Form. Registro" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="List. Voluntarios" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Contabilidad" /></Link>
//           </ListItemButton>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Inventario" /></Link>
//           </ListItemButton>          <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Usuarios" /></Link>
//           </ListItemButton>
//         </List>
//       </Collapse>
//       <ListItemButton onClick={handleClickInventario}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inventario" />
//         {openInventario ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={openInventario} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Formulario" /></Link>
//           </ListItemButton>
//         </List>
//       </Collapse>
//         <List component="div" disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <Link to="/">
//             <ListItemText primary="Calendario" /></Link>
//           </ListItemButton>
//         </List>
//       </List>
//     </div>
//   );
// }
// export default Navbar
