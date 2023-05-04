/*import React, { useState } from "react";

// Definimos una interfaz para los valores del formulario
interface FormValues {
  nombre: string;
  edad: number;
  genero: string;
  imagen: File | null;
}

// Definimos los valores iniciales del formulario
const initialFormValues: FormValues = {
  nombre: "",
  edad: 0,
  genero: "",
  imagen: null,

};

const FormComponent: React.FC = () => {
  // Usamos el hook `useState` para manejar los valores del formulario
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  // Manejamos los cambios en los campos del formulario
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Usamos el spread operator para copiar los valores actuales del formulario y luego actualizar el valor del campo modificado
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFormValues({ ...formValues, imagen: files[0] });
    }
  };

  // Manejamos el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/animales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      // Convertimos la respuesta a un objeto JSON
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Renderizamos el formulario
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormComponent;*/

// Funciona imprime los perros en cards


import { useState, useEffect } from "react";
import { Animal, ListaAnimales } from "../../../Models/Animal";
import Table from "../../other/bloques/Table";

function ListaAnimaless() {
  const [animales, setAnimales] = useState<ListaAnimales>();

  useEffect(() => {
    async function obtenerAnimales() {
      try {
        const response = await fetch("http://localhost:8080/api/animales");
        const data = await response.json();
        setAnimales(data);
      } catch (error) {
        console.error(error);
      }
    }

    obtenerAnimales();
  }, []);

    const handleDataChange = (newData: ListaAnimales | undefined) => {
    setAnimales(newData);
  };

  return (
    <div>
      <h1>Lista de Animales</h1>
      <ul>
        {animales?.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.nombre}</h2>
            <p>Edad: {animal.edad}</p>
            <p>Género: {animal.genero}</p>
          </li>
        ))}
      </ul>
      <Table data={animales} onChange={handleDataChange}></Table>
    </div>
  );
}

export default ListaAnimaless;


// import { useState, useEffect } from "react";
// import Table from "../../other/bloques/Table";

// type Animales = Array<{ id: number, nombre: string, edad: number }>;


// function ListaAnimales() {
//   let [animales, setAnimales] = useState<Animales>([]);

//   useEffect(() => {
//     async function obtenerAnimales() {
//       try {
//         const response = await fetch("http://localhost:8080/api/animales");
//         const data = await response.json();
//         setAnimales(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     obtenerAnimales();
//   }, []);

//   const handleDataChange = (newData: Animales) => {
//     setAnimales(newData);
//   };

//   return (
//     <div>
//         <Table data={animales} onChange={handleDataChange} />
//     </div>
//   );
// }

// export default ListaAnimales;


// import { useState, useEffect } from "react";
// import Table from "../../other/bloques/Table";

// type Animales = Array<{ id: number, nombre: string, edad: number }>;

// function Componente() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [animales, setAnimales] = useState([]);

//   // const handleDataChange = (newData: Animales<>) => {
//   //   setAnimales(newData);
//   // };

//   useEffect(() => {
//     async function obtenerAnimales() {
//       try {
//         const response = await fetch("http://localhost:8080/api/animales");
//         const data = await response.json();
//         setAnimales(data);
//         setIsLoading(false); // Se actualiza la variable de estado para indicar que los datos se han cargado
//       } catch (error) {
//         console.error(error);
//         setIsLoading(false); // También se actualiza en caso de error
//       }
//     }

//     obtenerAnimales();
//   }, []);

//   if (isLoading) {
//     return <div>Cargando...</div>; // Se muestra un indicador de carga mientras los datos se están obteniendo
//   }

//   return (
//     <div>
//       {/* <Table data={animales} onChange={handleDataChange} /> */}
//     </div>
//   );
// }






// Esto va imprime los perros en algo parecido a "cards"

// import { useState, useEffect } from "react";

// interface Animal {
//   id: number;
//   nombre: string;
//   edad: number;
//   genero: string;
//   imagenUrl: string;
// }

// function ListaAnimales() {
//   const [animales, setAnimales] = useState<Animal[]>([]);

//   useEffect(() => {
//     async function obtenerAnimales() {
//       try {
//         const response = await fetch("http://localhost:8080/api/animales");
//         const data = await response.json();
//         setAnimales(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     obtenerAnimales();
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Animales</h1>
//       <ul>
//         {animales.map((animal) => (
//           <li key={animal.id}>
//             <img src={animal.imagenUrl} alt={animal.nombre} />
//             <h2>{animal.nombre}</h2>
//             <p>Edad: {animal.edad}</p>
//             <p>Género: {animal.genero}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaAnimales;
