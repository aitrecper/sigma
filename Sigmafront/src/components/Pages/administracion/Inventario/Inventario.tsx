import React, { useState } from 'react';
import { Divider, Radio } from 'antd';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import {MinusCircleOutlined } from '@ant-design/icons';
import {EditOutlined} from '@ant-design/icons';
import {CheckCircleOutlined } from '@ant-design/icons';
import {CloseCircleOutlined } from '@ant-design/icons';
import { Table, Input, Select } from 'antd';




interface Inventario {
    id:number;
    producto: string;
    tipologia:string;
    abierto: string;
    fechacaducidad:string;
    cantidad: number;
  }


  const exampleData: Inventario [] = [
    { id: 1,producto:"pienso",tipologia:"perro", abierto:"no",fechacaducidad:"01-01-2022", cantidad:1,}
  ];


function Inventario() {
    const [inventario, setInventario] = useState<Inventario[]>(exampleData);
    const [newInvoiceData, setNewInvoiceData] = useState<Partial<Inventario>>({});
    const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
    const [isEditingSelectedInvoices, setIsEditingSelectedInvoices] = useState(false);
    const [updatedData, setUpdatedData] = useState<Partial<Inventario>>({});
    const [showImporte, setShowImporte] = useState(false);
    const [showAddInvoiceForm, setShowAddInvoiceForm] = useState(false);
    const [search,setSearch]=useState('');


    const handleAddInvoice = (newInventario: Inventario) => {
        setInventario((prevInvoices) => [...prevInvoices, newInventario]);
        setNewInvoiceData({});
      };


      const handleEditSelectedInvoices = () => {
        setInventario((prevInvoices) =>
          prevInvoices.map((inventario) =>
            selectedInvoices.includes(inventario.id)
              ? { ...inventario, ...updatedData }
              : inventario
          )
        );
        setIsEditingSelectedInvoices(false);
        setSelectedInvoices([]);
        setUpdatedData({});
      };


      const handleDeleteSelectedInvoices = () => {
        setInventario((prevInvoices) =>
          prevInvoices.filter((inventario) => !selectedInvoices.includes(inventario.id))
        );
        setSelectedInvoices([]);
      };


      const handleSaveChanges = () => {
        if (Object.keys(updatedData).length === 0) {
          // No hay cambios por guardar, no hacemos nada
          return;
        }
     
        setInventario((prevInventario) =>
          prevInventario.map((inventario) =>
            selectedInvoices.includes(inventario.id)
              ? { ...inventario, ...updatedData }
              : inventario
          )
        );
        setIsEditingSelectedInvoices(false);
        setSelectedInvoices([]);
        setUpdatedData({});
      };
   


      const columns = [
        { title: "Fecha", dataIndex: "producto" },
        { title: "Tipologia", dataIndex: "tipologia" },
        { title: "Abierto", dataIndex: "abierto" },
        { title: "Fechacaducidad", dataIndex: "fechacaducidad" },
        {title: "Cantidad",dataIndex: "cantidad"},
      ];


      const data = inventario.map((inventario) => {


        return {
          key: inventario.id,
          producto: inventario.producto,
          tipologia: inventario.tipologia,
          abierto: inventario.abierto,
          fechacaducidad: inventario.fechacaducidad,
          cantidad: inventario.cantidad,
        };
      });


      return (
        <>




<h2 className="INVENTARIO">CONTA</h2>


{/* BOTONES */}


  {/* BOTON CABECERA AGREGAR */}
  <Button
        type="button"
        className="crud"
        onClick={() => setShowAddInvoiceForm(true)}
        disabled={selectedInvoices.length > 0}>
        <PlusCircleOutlined />
        Agregar producto
</Button>


 {/* BOTON CABECERA EDITAR */}
      <Button
        className="crud"
        onClick={() => setIsEditingSelectedInvoices(true)}
        disabled={selectedInvoices.length === 0}><EditOutlined/>
        Editar producto
      </Button>


 {/* BOTON CABECERA ELIMINAR */}
      <Button
        className="crud"
        onClick={handleDeleteSelectedInvoices}
        disabled={selectedInvoices.length === 0}
      ><MinusCircleOutlined/>
        Eliminar producto
      </Button>
   


    {showAddInvoiceForm && (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      // datos de la nueva factura
      const newInventario: Inventario = {
        id: inventario.length + 1,
        ...newInvoiceData,
      };
      handleAddInvoice(newInventario);
      setShowAddInvoiceForm(false); // ocultar el formulario después de agregar una factura
    }}
  >
    <h4>Editar producto </h4>
    <label>






    <label style={{ fontSize: '16px', marginBottom: '10px' }}>
    Producto:
  <input
    type="string"
    value={newInvoiceData.producto || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        producto:event.target.value,
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px', }}
  />
</label>


<label style={{ fontSize: '16px', marginBottom: '10px' }}>
    Tipologia:
  <input
    type="string"
    value={newInvoiceData.tipologia || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        tipologia:event.target.value,
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px', }}
  />
</label>


<label style={{ fontSize: '16px', marginBottom: '10px' }}>
    Abierto:
  <input
    type="string"
    value={newInvoiceData.abierto || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        abierto:event.target.value,
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px', }}
  />
</label>


<label style={{ fontSize: '16px', marginBottom: '10px' }}>
   Fecha caducidad:
  <input
    type="string"
    value={newInvoiceData.fechacaducidad || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        fechacaducidad:event.target.value,
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px', }}
  />
</label>


<label style={{ fontSize: '16px', marginBottom: '10px' }}>
    Cantidad:
  <input
    type="number"
    value={newInvoiceData.cantidad || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        cantidad:Number(event.target.value),
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px', }}
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




 {/* Listado de facturas */}
 <Table
  className="lista"
  columns={columns}
  dataSource={data}
  size="small"
  pagination={{ pageSize: 5 }}
  rowSelection={{
    type: 'checkbox',
    onChange: (selectedRowKeys: React.Key[], selectedRows: Inventario[]) => {
      setSelectedInvoices(selectedRowKeys.map((key) => Number(key)));
    },


   
  }}
 
/>


</>
  );
 
}


export default Inventario
