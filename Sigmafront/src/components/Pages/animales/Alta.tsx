import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

// Definimos una interfaz para los valores del formulario
interface FormValues {
  nombre: string,
  edad: number,
  genero: string,
  imagen: File | null,
  jaula: number,
  raza: string,
  tipoAnimal: string,
  chip: number,
  pasaporte: number,
  salud: boolean,
  gato: boolean,
  perro: boolean,
  niños: boolean,
  fechaLlegada: string,
  ppp: boolean,
  esterilizado: boolean,
  compartirJaula: boolean,
};

// Definimos los valores iniciales del formulario
const initialFormValues: FormValues = {
  nombre: "",
  edad: 0,
  genero: "",
  imagen: null,
  jaula: 0,
  raza: "",
  tipoAnimal: "",
  chip: 0,
  pasaporte: 0,
  salud: false,
  gato: false,
  perro: false,
  niños: false,
  fechaLlegada: "",
  ppp: false,
  esterilizado: false,
  compartirJaula: false
};

function postAnimalesWithPostImg(imageInputRef: any, formValues: any) {
  try {
    // Ataca al end point que introduce el objeto con los datos de los animales
    postAnimales(formValues);
    postImg(imageInputRef);
  } catch (error) {
    console.error(error);
  }
}

function postAnimales(formValues: FormValues) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "nombre": formValues.nombre,
    "edad": formValues.edad,
    "genero": formValues.genero,
    "imagen": formValues.imagen?.name,
    "jaula": formValues.jaula,
    "raza": formValues.raza,
    "tipoAnimal": formValues.tipoAnimal,
    "chip": formValues.chip,
    "pasaporte": formValues.pasaporte,
    "salud": formValues.salud,
    "gato": formValues.gato,
    "perro": formValues.perro,
    "niños": formValues.niños,
    "fechaLlegada": formValues.fechaLlegada,
    "ppp": formValues.ppp,
    "esterilizado": formValues.esterilizado,
    "compartirJaula": formValues.compartirJaula
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    //body: raw,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/animales", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log('error', error));
}


function postImg(imagen: any): any {
  // Create a Blob object from a file
  const file = imagen;
  console.log(imagen.name);
  var formdata = new FormData();

  formdata.append('imagen', file);
  var requestOptions: RequestInit = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/animales/img", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function Animales_Alta() {
  // Usamos el hook `useState` para manejar los valores del formulario
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  // Manejamos los cambios en los campos del formulario
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Usamos el spread operator para copiar los valores actuales del formulario y luego actualizar el valor del campo modificado
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
    console.log(formValues);

  };
  const handleListChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);

  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setFormValues({ ...formValues, imagen: files[0] });
    }
  };

  let imageInputRef = useRef<HTMLInputElement>(null);


  // Manejamos el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selectedFile = imageInputRef.current?.files?.[0];

    postAnimalesWithPostImg(selectedFile, formValues);
  };

  // Renderizamos el formulario
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formValues.nombre} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Edad:
        <input type="number" name="edad" value={formValues.edad} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
      Genero del animal 
      <select name="genero" value={formValues.genero} onChange={handleListChange}>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>
      </label>
      <br></br>
      <label>
        Jaula:
        <input type="number" name="jaula" value={formValues.jaula} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        raza:
        <input type="text" name="raza" value={formValues.raza} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>Que animal es
      <select name="tipoAnimal" value={formValues.tipoAnimal} onChange={handleListChange}>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Conejo">Conejo</option>
        <option value="Otros">Otros</option>
      </select>
      </label>

      <br></br>
      <label>
        Chip:
        <input type="number" name="chip" value={formValues.chip} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Pasaporte:
        <input type="number" name="pasaporte" value={formValues.pasaporte} onChange={handleInputChange} />
      </label>
      <br></br>
      <label>
        Fecha de Llegada:
        <input type="date" name="fechaLlegada" value={formValues.fechaLlegada} onChange={handleInputChange} />
      </label>
      <br></br>
      <input type="checkbox" checked={formValues.salud} name="salud" onChange={handleCheckBoxChange} />
      <label htmlFor="salud">Requiere tratamientos</label>
      <br></br>
      <input type="checkbox" checked={formValues.gato} name="gato" onChange={handleCheckBoxChange} />
      <label htmlFor="gato"> Es compatible con gatos</label>
      <br></br>
      <input type="checkbox" checked={formValues.perro} name="perro" onChange={handleCheckBoxChange} />
      <label htmlFor="perro"> Es compatible con perro</label>
      <br></br>
      <input type="checkbox" checked={formValues.niños} name="niños" onChange={handleCheckBoxChange} />
      <label htmlFor="niños"> Es compatible con niños</label>
      <br></br>
      <input type="checkbox" checked={formValues.ppp} name="ppp" onChange={handleCheckBoxChange} />
      <label htmlFor="ppp"> Es ppp (perro potencialmente peligroso)</label>
      <br></br>
      <input type="checkbox" checked={formValues.esterilizado} name="esterilizado" onChange={handleCheckBoxChange} />
      <label htmlFor="esterilizado"> Esta esterilizado</label>
      <br></br>
      <input type="checkbox" checked={formValues.compartirJaula} name="compartirJaula" onChange={handleCheckBoxChange} />
      <label htmlFor="compartirJaula"> Puede compartir jaula</label>
      <br></br>
      <input type="file" name="imagen" id="1" ref={imageInputRef} onChange={handleImageChange} required />
      <br></br>
      <br></br>
      <Link to="">
      <button type="submit">Enviar</button>
      </Link>
    </form>
  );
};

export default Animales_Alta;