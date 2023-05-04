import { Routes,Route } from "react-router-dom"
import  { Home, Home2 } from "../components/Pages/Home/Home"
import Login from "../components/Login/Login"
import Formulario from "../components/Pages/veterinario/Formulario"
import FormComponent from "../components/Pages/animales/Alta"
import FormComponent2 from "../components/Pages/animales/Baja"
import Animales_Alta from "../components/Pages/animales/Alta"
import Animales_Baja from "../components/Pages/animales/Baja"
import Demo from "../components/Pages/animales/demo"
import DemoTabla from "../components/Pages/animales/demoTabla"
import HistorialFacturacion from "../components/Pages/administracion/Facturacion/HistorialFacturacion"
import Cuidadores from "../components/Pages/administracion/Cuidadores/Cuidadores"
import Contabilidad from "../components/Pages/administracion/Contabilidad/Contabilidad"
import Inventario from "../components/Pages/administracion/Inventario/Inventario"

const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/loged' element={<Home2 />}></Route>
        <Route path='/animales/alta' element={<Animales_Alta />}></Route>
        <Route path='/animales/baja' element={<Animales_Baja />}></Route>
        <Route path='/animales/demo' element={<Demo />}></Route>
        <Route path='/animales/demoTabla' element={<DemoTabla />}></Route>
        <Route path='/administracion/facturacion' element={<HistorialFacturacion />}></Route>
        <Route path='/administracion/cuidadores' element={<Cuidadores />}></Route>
        <Route path='/administracion/contabilidad' element={<Contabilidad />}></Route>
        <Route path='/administracion/inventario' element={<Inventario />}></Route>

      </Routes>
    )
  }

  const AllRoutes2 = () => {
    return (
      <Routes>
        <Route path='/home/' element={<Home />}></Route>
        <Route path='/home/formulario' element={<Formulario />}></Route>
        <Route path='/home/login' element={<Login />}></Route>
  
  
      </Routes>
    )
  }
  
  export {AllRoutes, AllRoutes2}