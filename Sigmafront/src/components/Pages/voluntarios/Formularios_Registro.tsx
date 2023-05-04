// import { useState } from 'react';

// function Form() {
//   const [nombre, setNombre] = useState('');
//   const [apellido1, setApellido1] = useState('');
//   const [apellido2, setApellido2] = useState('');
//   const [dni, setDni] = useState('');
//   const [mail, setMail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [diasDisponibles, setDiasDisponibles] = useState('');
//   const [horarioDisponible, setHorarioDisponible] = useState('');
//   const [edad, setEdad] = useState('');
//   const [donacion, setDonacion] = useState('');
//   const [cuentBancaria, setCuentaBancaria] = useState('');
//   const [accionRealizar, setAccionRealizar] = useState('');


//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     await submitForm({ nombre, apellido1, apellido2, dni, mail, telefono, diasDisponibles, horarioDisponible, accionRealizar})
//     // Lógica adicional para manejar el éxito o el error del envío del formulario
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
//       <input type="text" value={apellido1} onChange={(event) => setApellido1(event.target.value)} />
//       <input type="text" value={apellido2} onChange={(event) => setApellido2(event.target.value)} />
//       <input type="number" value={dni} onChange={(event) => setDni(event.target.value)} />
//       <input type="mail" value={mail} onChange={(event) => setMail(event.target.value)} />
//       <input type="number" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
//       <input type="text" value={apellido2} onChange={(event) => setApellido2(event.target.value)} />
//       <input type="text" value={apellido2} onChange={(event) => setApellido2(event.target.value)} />
//       <input type="text" value={apellido2} onChange={(event) => setApellido2(event.target.value)} />
//       <input type="text" value={apellido2} onChange={(event) => setApellido2(event.target.value)} />
//       <input type="text" value={apellido2} onChange={(event) => setApellido2(event.target.value)} />

//       <button type="submit">Enviar</button>
//     </form>
//   );
// }
