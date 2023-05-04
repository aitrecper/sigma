import { useState } from "react";
import { Animal, ListaAnimales } from "../../../Models/Animal";
import "./Table.css";

type Props = {
  data: ListaAnimales | undefined,
  onChange: (newData: ListaAnimales | undefined) => void
};

const Table = ({ data, onChange }: Props) => {
  let [tableData, setTableData] = useState(data);

  const handleInputChange = (id: number, field: string, value: string | number) => {
    const newData = tableData?.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setTableData(newData);
    onChange(newData);
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Genero</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <input type="text" value={item.nombre} onChange={(e) => handleInputChange(item.id, "nombre", e.target.value)} />
            </td>
            <td>
              <input type="number" value={item.edad} onChange={(e) => handleInputChange(item.id, "edad", parseInt(e.target.value))} />
            </td>
            {/* <td>
              <input type="text" value={item.genero} onChange={(e) => handleInputChange(item.id, "genero", e.target.value)} />
            </td> */}
            <td><select value={item.genero} onChange={(e) => handleInputChange(item.id, "genero", e.target.value)}>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;



// Antes de los retoques

// import { useState } from "react";

// type Props = {
//   data: Array<{ id: number, nombre: string, edad: number }>,
//   onChange: (newData: Array<{ id: number, nombre: string, edad: number }>) => void
// };

// const Table = ({ data, onChange }: Props) => {
//   const [tableData, setTableData] = useState(data);

//   const handleInputChange = (id: number, field: string, value: string | number) => {
//     const newData = tableData.map((item) => {
//       if (item.id === id) {
//         return { ...item, [field]: value };
//       }
//       return item;
//     });
//     setTableData(newData);
//     onChange(newData);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Nombre</th>
//           <th>Edad</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData.map((item) => (
//           <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>
//               <input type="text" value={item.nombre} onChange={(e) => handleInputChange(item.id, "name", e.target.value)} />
//             </td>
//             <td>
//               <input type="number" value={item.edad} onChange={(e) => handleInputChange(item.id, "age", parseInt(e.target.value))} />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;