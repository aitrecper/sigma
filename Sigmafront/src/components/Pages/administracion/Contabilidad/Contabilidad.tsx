import React, { useState } from 'react';
import { Divider, Radio } from 'antd';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import {MinusCircleOutlined } from '@ant-design/icons';
import {EditOutlined} from '@ant-design/icons';
import {CheckCircleOutlined } from '@ant-design/icons';
import {CloseCircleOutlined } from '@ant-design/icons';
import { Table, Input, Select } from 'antd';












interface Facturas {
  id:number;
  fecha: string;
  concepto:string;
  debe: number;
  haber:number;
  saldo: number;
}






/* Datos de ejemplo */


const exampleData: Facturas[] = [
  { id: 1,fecha:"01-01-2022",concepto: "luz",debe:10,haber: 0, saldo:-10 },
  { id: 2,fecha:"01-01-2022",concepto: "luz",debe:0,haber:100, saldo:90 },
  { id: 3,fecha:"01-01-2022",concepto: "luz",debe:0,haber:130, saldo:90 },
];






function HistorialFacturacion() {
  const [facturas, setFacturas] = useState<Facturas[]>(exampleData);
  const [newInvoiceData, setNewInvoiceData] = useState<Partial<Facturas>>({});
  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
  const [isEditingSelectedInvoices, setIsEditingSelectedInvoices] = useState(false);
  const [updatedData, setUpdatedData] = useState<Partial<Facturas>>({});
  const [showImporte, setShowImporte] = useState(false);
  const [showAddInvoiceForm, setShowAddInvoiceForm] = useState(false);
  const [search,setSearch]=useState('');


  // sumas
  const totalDebe = facturas.reduce((accumulator, factura) => accumulator + factura.debe, 0);
  const totalHaber = facturas.reduce((accumulator, factura) => accumulator + factura.haber, 0);
  const totalSaldo= facturas.reduce((accumulator, factura) => accumulator + factura.haber, 0);




 
  const handleAddInvoice = (newFactura: Facturas) => {
    setFacturas((prevInvoices) => [...prevInvoices, newFactura]);
    setNewInvoiceData({});
  };






  const handleEditSelectedInvoices = () => {
    setFacturas((prevInvoices) =>
      prevInvoices.map((factura) =>
        selectedInvoices.includes(factura.id)
          ? { ...factura, ...updatedData }
          : factura
      )
    );
    setIsEditingSelectedInvoices(false);
    setSelectedInvoices([]);
    setUpdatedData({});
  };


  const handleDeleteSelectedInvoices = () => {
    setFacturas((prevInvoices) =>
      prevInvoices.filter((factura) => !selectedInvoices.includes(factura.id))
    );
    setSelectedInvoices([]);
  };


  const handleSaveChanges = () => {
    if (Object.keys(updatedData).length === 0) {
      // No hay cambios por guardar, no hacemos nada
      return;
    }
 
    setFacturas((prevFacturas) =>
      prevFacturas.map((factura) =>
        selectedInvoices.includes(factura.id)
          ? { ...factura, ...updatedData }
          : factura
      )
    );
    setIsEditingSelectedInvoices(false);
    setSelectedInvoices([]);
    setUpdatedData({});
  };


 




  const columns = [
    { title: "Fecha", dataIndex: "fecha" },
    { title: "Concepto", dataIndex: "concepto" },
    { title: "Debe", dataIndex: "debe" },
    { title: "Haber", dataIndex: "haber" },
    {
      title: "Saldo",
      dataIndex: "saldo",
      render: (value: number, record: Facturas) =>
        record.key === "totales" ? null : (
          <span>
            {new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "EUR",
            }).format(value)}
          </span>
        ),
    },
  ];
 
 
  // SUMA
  const totalRow = {
    key: 'total',
    fecha: '',
    concepto: 'Total',
    debe: totalDebe,
    haber: totalHaber,
    saldo: totalSaldo,
  };
 
  const data = [...facturas, totalRow].map((factura) => {
    return {
      key: factura.id,
      fecha: factura.fecha,
      concepto: factura.concepto,
      debe: factura.debe,
      haber: factura.haber,
      saldo: factura.saldo,
    };
  });
 
  // FILTRO


 


  return (
    <>






<h2 className="cabecera">CONTA</h2>


      {/* BOTONES */}


  {/* BOTON CABECERA AGREGAR */}
  <Button
        type="button"
        className="crud"
        onClick={() => setShowAddInvoiceForm(true)}
        disabled={selectedInvoices.length > 0}>
        <PlusCircleOutlined />
        Agregar factura
</Button>


 {/* BOTON CABECERA EDITAR */}
      <Button
        className="crud"
        onClick={() => setIsEditingSelectedInvoices(true)}
        disabled={selectedInvoices.length === 0}><EditOutlined/>
        Editar facturas
      </Button>


 {/* BOTON CABECERA ELIMINAR */}
      <Button
        className="crud"
        onClick={handleDeleteSelectedInvoices}
        disabled={selectedInvoices.length === 0}
      ><MinusCircleOutlined/>
        Eliminar facturas
      </Button>
     








      {/* AGREGAR MOVIMIENTO CONTABLE */}
{showAddInvoiceForm && (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      // datos de la nueva factura
      const newfacturas: Facturas = {
        id: facturas.length + 1,
        ...newInvoiceData,
      };
      handleAddInvoice(newfacturas);
      setShowAddInvoiceForm(false); // ocultar el formulario después de agregar una factura
    }}
  >
    <h4>Editar movimiento </h4>
    <label>




    <label style={{ fontSize: '16px', marginBottom: '10px' }}>
    Fecha:
  <input
    type="string"
    value={newInvoiceData.fecha || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        fecha:event.target.value,
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px', }}
  />
</label>


    <label>
      Concepto:
      <input
        type="text"
        value={newInvoiceData.concepto || ''}
        onChange={(event) =>
          setNewInvoiceData({
            ...newInvoiceData,
            concepto: event.target.value,
          })
        }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px' }}
      />
    </label>


    <label>
    Debe:
      <input
        type="number"
        value={newInvoiceData.debe || ''}
        onChange={(event) =>
          setNewInvoiceData({
            ...newInvoiceData,
            debe: Number(event.target.value),
          })
        }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px' }}
      />
    </label>


 


    <label>
    Haber:
      <input
        type="number"
        value={newInvoiceData.haber || ''}
        onChange={(event) =>
          setNewInvoiceData({
            ...newInvoiceData,
            haber: Number(event.target.value),
          })
        }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '8px',width: '50px' }}
      />
    </label>
    <label>
    Saldo:
   <input
    type="number"
    value={newInvoiceData.saldo || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        saldo: Number(event.target.value),
      })
    }
    style={{ borderRadius: '5px', marginRight: '5px',width: '50px'  }}
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
        event.preventDefault(); // Guarda los cambios en las facturas seleccionadas
        handleEditSelectedInvoices();
      }}
    >
 
      {/* Campos del formulario */}
     
   
      <label >
      Fecha:
  <input
    type="string"
    value={newInvoiceData.fecha|| ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        fecha: event.target.value,
      })
    }
    style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '8px', marginTop:'20px' }}
  />
</label>




      <label className="camposrelleno">
      Concepto:
        <input
          type="text"
          value={updatedData.concepto || ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              concepto: event.target.value,
            })
          }
          style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px' }}
        />
      </label>


      <label >
      Debe:
        <input
          type="number"
          value={updatedData.debe || ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              debe: Number(event.target.value),
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px' }}
        />
      </label>


 


<label>
    Saldo:
  <input
    type="number"
    value={updatedData.saldo || ''}
    onChange={(event) =>
      setUpdatedData({
        ...updatedData,
        saldo: Number(event.target.value),
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '50px' }}
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
    onChange: (selectedRowKeys: React.Key[], selectedRows: Facturas[]) => {
      setSelectedInvoices(selectedRowKeys.map((key) => Number(key)));
    },


   
  }}
 
/>


</>
  );
 
}


export default HistorialFacturacion
