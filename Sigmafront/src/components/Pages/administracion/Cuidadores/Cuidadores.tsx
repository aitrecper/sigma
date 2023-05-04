import React, { useState } from 'react';
import { Divider, Radio } from 'antd';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import {MinusCircleOutlined } from '@ant-design/icons';
import {EditOutlined} from '@ant-design/icons';
import {CheckCircleOutlined } from '@ant-design/icons';
import {CloseCircleOutlined } from '@ant-design/icons';
import { Table, Input, Select } from 'antd';




interface Ficha {
    id:number;
    nombre: string;
    apellido1:string;
    apellido2: string;
    dni:string;
    mail:string;
    telefono:number;
    usuario:string;
  }
 
  const exampleData: Ficha[] = [
    { id: 1, nombre:"Alicia", apellido1:"Casanova",apellido2:"Navarro",dni:"47404571B",mail:"ali@gmail.com",telefono:659852654, usuario:"alikasanova" },
  ];


  function Cuidadores() {
    const [ficha, setFicha] = useState<Ficha[]>(exampleData);
    const [newInvoiceData, setNewInvoiceData] = useState<Partial<Ficha>>({});
    const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
    const [isEditingSelectedInvoices, setIsEditingSelectedInvoices] = useState(false);
    const [updatedData, setUpdatedData] = useState<Partial<Ficha>>({});
    // const [showImporte, setShowImporte] = useState(false);
    const [showAddInvoiceForm, setShowAddInvoiceForm] = useState(false);
    // const [search,setSearch]=useState('');


    // FUNCIONES BOTONES
    const handleAddInvoice = (newFicha: Ficha) => {
        setFicha((prevInvoices) => [...prevInvoices, newFicha]);
        setNewInvoiceData({});
      };


      const handleEditSelectedInvoices = () => {
        setFicha((prevInvoices) =>
          prevInvoices.map((ficha) =>
            selectedInvoices.includes(ficha.id)
              ? { ...ficha, ...updatedData }
              : ficha
          )
        );
        setIsEditingSelectedInvoices(false);
        setSelectedInvoices([]);
        setUpdatedData({});
      };
       
      const handleDeleteSelectedInvoices = () => {
        setFicha((prevInvoices) =>
          prevInvoices.filter((ficha) => !selectedInvoices.includes(ficha.id))
        );
        setSelectedInvoices([]);
      };


      const handleSaveChanges = () => {
        if (Object.keys(updatedData).length === 0) {
          // No hay cambios por guardar, no hacemos nada
          return;
        }
     
        setFicha((prevFicha) =>
          prevFicha.map((ficha) =>
            selectedInvoices.includes(ficha.id)
              ? { ...ficha, ...updatedData }
              : ficha
          )
        );
        setIsEditingSelectedInvoices(false);
        setSelectedInvoices([]);
        setUpdatedData({});
      };




    //   COLUMNAS
      const columns = [
     
        { title: 'Nombre', dataIndex: 'nombre' },
        { title: 'Apellido 1', dataIndex: 'apellido1' },
        { title: 'Apellido 2', dataIndex: 'apellido2' },  
        { title: 'DNI', dataIndex: 'dni' },
        { title: 'Mail', dataIndex: 'mail' },
        { title: 'Telefono', dataIndex: 'telefono' },
        { title: 'Usuario', dataIndex: 'usuario' },
    ];
       
    const data = ficha.map((ficha) => {
        return {
          key: ficha.id,
          nombre: ficha.nombre,
          apellido1:ficha.apellido1,
          apellido2:ficha.apellido2,
          dni:ficha.dni,
          mail:ficha.mail,
          telefono:ficha. telefono,
          usuario:ficha.usuario,
         
        };
      });
     
      return (
        <>
          <h2 className="cabecera">Cuidadores</h2>
     
          {/* BOTON CABECERA AGREGAR */}
          <Button
            type="button"
            className="crud"
            onClick={() => setShowAddInvoiceForm(true)}
            disabled={selectedInvoices.length > 0}
          >
            <PlusCircleOutlined />
            Agregar
          </Button>
     
          {/* BOTON CABECERA EDITAR */}
          <Button
            className="crud"
            onClick={() => setIsEditingSelectedInvoices(true)}
            disabled={selectedInvoices.length === 0}
          >
            <EditOutlined/>
            Editar
          </Button>
     
          {/* BOTON CABECERA ELIMINAR */}
          <Button
            className="crud"
            onClick={handleDeleteSelectedInvoices}
            disabled={selectedInvoices.length === 0}
          >
            <MinusCircleOutlined/>
            Eliminar
          </Button>
     






          {/*AGREGAR NUEVO EMPLEADO */}
          {showAddInvoiceForm && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const newficha: Ficha = {
                  id: ficha.length + 1,
                  ...newInvoiceData,
                };
                handleAddInvoice(newficha);
                setShowAddInvoiceForm(false); // ocultar el formulario después de agregar una factura
              }}
            >
            <h4>Agregar Cuidador</h4>
            <label>
          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
            Nombre:
            <input
              type="text"
              value={newInvoiceData.nombre || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  nombre: event.target.value,
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>


          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
            Apellido 1:
            <input
              type="text"
              value={newInvoiceData.apellido1 || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  apellido1: event.target.value,
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>


          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
            Apellido 2:
            <input
              type="text"
              value={newInvoiceData.apellido2 || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  apellido2: event.target.value,
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>


          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
            DNI:
            <input
              type="text"
              value={newInvoiceData.dni || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  dni: event.target.value,
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>
          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
            Mail:
            <input
              type="text"
              value={newInvoiceData.mail || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  mail:event.target.value,
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>
          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
           Telefono:
            <input
              type="number"
              value={newInvoiceData.telefono || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  telefono:Number(event.target.value),
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>
          <label style={{ fontSize: '16px', marginBottom: '10px' }}>
           Usuario:
            <input
              type="text"
              value={newInvoiceData.usuario || ''}
              onChange={(event) =>
                setNewInvoiceData({
                  ...newInvoiceData,
                  usuario:event.target.value,
                })
              }
              style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '5px', marginLeft: '5px' }}
            />
          </label>
          </label>


          <button type="submit" className="btn"style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '10px', marginLeft: '10px',width: '150px', height:'25px' }}
><CheckCircleOutlined/> Guardar cambios</button>
<button
  style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '10px', marginLeft: '10px',width: '100px', height:'25px' }}
  onClick={() => setIsEditingSelectedInvoices(false)}
><CloseCircleOutlined/>  Cancelar </button>
</form>


)}






 {/* EDITAR FACTURA */}
{isEditingSelectedInvoices && (
  <div>
 
    <form className="form"
      onSubmit={(event) => {
        event.preventDefault();
                handleEditSelectedInvoices();
      }}
    >
 
      {/* Campos del formulario */}
     
   
      <label >
      Nombre:
  <input
    type="text"
    value={newInvoiceData.nombre || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        nombre: event.target.value,
      })
    }
    style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '8px', marginTop:'20px' }}
  />
</label>




      <label >
    Apellido 1:
        <input
          type="text"
          value={updatedData.apellido1 || ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              apellido1: event.target.value,
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px' }}
        />
      </label>


 


<label>
Apellido 2:
  <input
    type="text"
    value={updatedData.apellido2 || ''}
    onChange={(event) =>
      setUpdatedData({
        ...updatedData,
        apellido2: event.target.value,
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '50px' }}
  />
</label>
      <label >
      DNI:
        <input
          type="text"
          value={updatedData.dni|| ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              dni: event.target.value,
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '50px' }}
        />
      </label>


      <label >
      Mail:
        <input
          type="text"
          value={updatedData.mail|| ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              mail: event.target.value,
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '80px' }}
        />
      </label>
      <label >
      Telefono:
        <input
          type="number"
          value={updatedData.telefono|| ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              telefono:Number( event.target.value),
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '80px' }}
        />
      </label>
      <label >
      Usuario:
        <input
          type="text"
          value={updatedData.usuario|| ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              usuario: event.target.value,
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '80px' }}
        />
      </label>




      <button type="submit" className="btn"style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '10px', marginLeft: '10px',width: '150px', height:'25px' }}
><CheckCircleOutlined/> Guardar cambios</button>
<button
  style={{ borderRadius: '5px', marginBottom: '10px', marginRight: '10px', marginLeft: '10px',width: '100px', height:'25px' }}
  onClick={() => setIsEditingSelectedInvoices(false)}
><CloseCircleOutlined/>  Cancelar </button>
    </form>


  </div>
)}








{/* Listado de facturas */}
                <Table
                  className="lista"
                  columns={columns}
                  dataSource={data}
                  size="small"
                  pagination={{ pageSize: 5 }}
                  rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys: React.Key[], selectedRows: Ficha[]) => {
                      setSelectedInvoices(selectedRowKeys.map((key) => Number(key)));
                    },
                  }}
                />
           


             
         
            </>      
         );
        }
     
      export default Cuidadores
