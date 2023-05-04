import React, { useState } from "react";
import Table from "../../other/bloques/Table";
import { Animal, ListaAnimales } from "../../../Models/Animal";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

interface FormValues {
    nombre: string;
    tipo: string;
    edad: number;
    imagen: string;
  }

  // Definimos los valores iniciales del formulario
const initialFormValues: FormValues = {
    nombre: "Miguel",
    tipo: "asds",
    edad: 0,
    imagen: "Captura.PNG",
  };

const raw = JSON.stringify(initialFormValues);

const requestOptions: RequestInit = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};







const FormComponent2: React.FC = () => {

  // Manejamos el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
        fetch("http://localhost:8080/api/animales/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };



  // Cosas del table
  // let [initialData, setInitialData] = useState<Animales>([
  //   { id: 1, nombre: "John Doe", edad: 30 },
  //   { id: 2, nombre: "Jane Doe", edad: 25 },
  //   { id: 3, nombre: "Bob Smith", edad: 40 },
  // ]);

  // const handleDataChange = (newData: Animales) => {
  //   setInitialData(newData);
  // };

  // const handleAddRow = () => {
  //   const newId = initialData.length + 1;
  //   const newData = [...initialData, { id: newId, nombre: "", edad: 0 }];
  //   setInitialData(newData);
  // };




  return (
    
<div>
      {/* <button onClick={handleAddRow}>Add Row</button>
      <Table data={initialData} onChange={handleDataChange} /> */}
      <form onSubmit={handleSubmit}>

      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default FormComponent2;