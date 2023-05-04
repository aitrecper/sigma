 import React, { useEffect, useState } from "react";
  import Table from "../../other/bloques/Table";
  import { Animal, ListaAnimales, setAnimalById, compararListasAnimales, sonIgualesLasListas, guardarCambiosEnTablaAnimales} from "../../../Models/Animal";
  import BotonEnabled from "../../other/bloques/Boton"
import { useFetcher } from "react-router-dom";
  
  // Función de debugeo
  function mostrarListaAnimales(listaAnimales?: ListaAnimales) {
    if (listaAnimales === undefined) {
      console.log("La lista de animales está vacía.");
    } else{
      listaAnimales.forEach((animal) => {
        console.log(`${animal.nombre}: ${animal.edad}`);
  });
  }
  }
  
  
  
  const MainComponent = () => {
      const [animals, setAnimals] = useState<ListaAnimales | undefined>(undefined);
      // Lista de original
      const [AnimalesSinRetocar, setAnimalsO] = useState<ListaAnimales | undefined>(undefined); 
  
      // Cambia la información
      const handleDataChange = (newData: ListaAnimales | undefined) => {
        setAnimals(newData);
        // mostrarListaAnimales(newData);
        // mostrarListaAnimales(AnimalesSinRetocar);
      };
    
      // Coge la información
      
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:8080/api/animales");
            const data = await response.json();
            setAnimals(data);
            setAnimalsO(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
  
      // Cosas del boton
      const [isSubscribed, setIsSubscribed] = useState(false);
  
    // Botón
    function handleSubscribe() {
      guardarCambiosEnTablaAnimales(AnimalesSinRetocar, animals);
    }
    
      return (
        <div>
          <h1>Lista de Animales</h1>
          {animals ? (
            <Table data={animals} onChange={handleDataChange} />
          ) : (
            <p>Cargando...</p>
          )}
          <BotonEnabled onClick={handleSubscribe} isDisabled={isSubscribed} text="GuardarCambios" class="r2"/>
        </div>
      );
    };
    
    export default MainComponent;




  // import React, { useState } from "react";
  // import Table from "../../other/bloques/Table";
  // import { Animal, ListaAnimales, setAnimalById, compararListasAnimales, sonIgualesLasListas, guardarCambiosEnTablaAnimales} from "../../../Models/Animal";
  // import BotonEnabled from "../../other/bloques/BotonEnabled"
  
  // // Función de debugeo
  // function mostrarListaAnimales(listaAnimales?: ListaAnimales) {
  //   if (listaAnimales === undefined) {
  //     console.log("La lista de animales está vacía.");
  //   } else{
  //     listaAnimales.forEach((animal) => {
  //       console.log(`${animal.nombre}: ${animal.edad}`);
  // });
  // }
  // }
  
  
  
  // const MainComponent = () => {
  //     const [animals, setAnimals] = useState<ListaAnimales | undefined>(undefined);
  //     // Lista de original
  //     const [AnimalesSinRetocar, setAnimalsO] = useState<ListaAnimales | undefined>(undefined); 
  
  //     // Cambia la información
  //     const handleDataChange = (newData: ListaAnimales | undefined) => {
  //       setAnimals(newData);
  //       // mostrarListaAnimales(newData);
  //       // mostrarListaAnimales(AnimalesSinRetocar);
  //     };
    
  //     // Coge la información
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("http://localhost:8080/api/animales");
  //         const data = await response.json();
  //         setAnimals(data);
  //         setAnimalsO(data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
      
  
  //     // Cosas del boton
  //     const [isSubscribed, setIsSubscribed] = useState(false);
  
  //   // Botón
  //   function handleSubscribe() {
  //     guardarCambiosEnTablaAnimales(AnimalesSinRetocar, animals);
  //   }
    
  //     return (
  //       <div>
  //         <h1>Lista de Animales</h1>
  //         {animals ? (
  //           <Table data={animals} onChange={handleDataChange} />
  //         ) : (
  //           <p>Cargando...</p>
  //         )}
  //         <button onClick={fetchData}>Cargar Datos</button>
  //         <BotonEnabled onClick={handleSubscribe} isDisabled={isSubscribed} />
  //       </div>
  //     );
  //   };
    
  //   export default MainComponent;