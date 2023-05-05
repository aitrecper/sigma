import React, { useState } from 'react';
import { Button,Table, Input, Select, Space } from 'antd';
import { PlusCircleOutlined, EditOutlined,MinusCircleOutlined, CloseCircleOutlined  } from '@ant-design/icons';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';




interface Facturas {
  id:number;
  numerofac: number;
  concepto:string;
  tipologia: string;
  importe:number;
  jaula: number;
  chip:number;
}






/* Datos de ejemplo */


const exampleData: Facturas[] = [
  { id: 1,numerofac:1,concepto: "Suministros",tipologia:"Luz",importe: 100, jaula:1,chip:1 },
  { id: 3, numerofac:2,concepto: "Animales",tipologia:"Adopcion",importe: 150,jaula:2,chip:1 },
  { id: 4,numerofac:3,concepto: "Suministros",tipologia:"Luz",importe: 150,jaula:3,chip: 1  },
  { id: 5, numerofac:4,concepto: "adopcion",tipologia:"Traslados",importe: 150, jaula:4,chip:1 },
  { id: 6,numerofac:5,concepto: "Animales", tipologia:"Gas",importe: 150, jaula:5,chip:1 },
];






function HistorialFacturacion() {
  const [facturas, setFacturas] = useState<Facturas[]>(exampleData);
  const [newInvoiceData, setNewInvoiceData] = useState<Partial<Facturas>>({});
  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
  const [isEditingSelectedInvoices, setIsEditingSelectedInvoices] = useState(false);
  const [updatedData, setUpdatedData] = useState<Partial<Facturas>>({});
  // const [showImporte, setShowImporte] = useState(false);
  const [showAddInvoiceForm, setShowAddInvoiceForm] = useState(false);
 
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<Facturas>>({});


// FILTRO


const handleChange: TableProps<Facturas>['onChange'] = (pagination, filters, sorter) => {
  console.log('Various parameters', pagination, filters, sorter);
  setFilteredInfo(filters);
  setSortedInfo(sorter as SorterResult<Facturas>);
};


const clearFilters = () => {
  setFilteredInfo({});
};


const clearAll = () => {
  setFilteredInfo({});
  setSortedInfo({});
};


const setImporteSort = () => {
  setSortedInfo({
    order: 'descend',
    columnKey: 'importe',
  });
};




// AÑADIR




  const handleAddInvoice = (newFactura: Facturas) => {
    setFacturas((prevInvoices) => [...prevInvoices, newFactura]);
    setNewInvoiceData({});
  };


// if(search==='reset') setSearch('Hola');


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
    { title: 'Numero de Factura', dataIndex: 'numerofac' },
    { title: 'Concepto', dataIndex: 'concepto', filters: [
      { text: 'Suministros', value: 'suministros' },
      { text: 'Animales', value: 'animales' },
    ],
    filteredValue: filteredInfo.concepto || null,
    onFilter: (value: string, record) => record.concepto.includes(value),
    sorter: (a, b) => a.concepto.length - b.concepto.length,
    sortOrder: sortedInfo.columnKey === 'concepto' ? sortedInfo.order : null,
    ellipsis: true,
  },
    { title: 'Tipologia', dataIndex: 'tipologia',filters: [
      { text: 'Luz', value: 'luz' },
      { text: 'Adopcion', value: 'adopcion' },
      { text: 'Traslados', value: 'traslados' },
      { text: 'Gas', value: 'gas' },
    ],
    filteredValue: filteredInfo.concepto || null,
    onFilter: (value: string, record) => record.concepto.includes(value),
    sorter: (a, b) => a.concepto.length - b.concepto.length,
    sortOrder: sortedInfo.columnKey === 'concepto' ? sortedInfo.order : null,
    ellipsis: true,},  
    { title: 'Pagada', dataIndex: 'pagada' },
    {
      title: 'Importe',
      dataIndex: 'importe',
      render: (value: number) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
      }
    },
    { title: 'Jaula', dataIndex: 'jaula' },
    { title: 'Chip', dataIndex: 'chip' }
  ];
 
 
 
  const data = facturas.map((factura) => {
    return {
      key: factura.id,
      numerofac: factura.numerofac,
      concepto:factura.concepto,
      tipologia:factura.tipologia,
      importe: factura.importe,
      jaula:factura. jaula,
      chip:factura.chip,
    };
  });


  // FILTRO


 


  return (
    <>










<h2 className="cabecera"></h2>


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
     
{/* LIMPIAR FILTROS */}
<Space style={{ marginBottom: 16 }}><Button onClick={clearFilters}>Limpiar Filtros</Button></Space>
{/* <Table columns={columns} dataSource={data} onChange={handleChange} /> */}




      {/* agregar nueva factura */}
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
    <h4>Editar facturas </h4>
    <label>




    <label style={{ fontSize: '16px', marginBottom: '10px' }}>
  Numero de Factura:
  <input
    type="number"
    value={newInvoiceData.numerofac || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        numerofac: Number(event.target.value),
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
    Tipologia:
      <input
        type="text"
        value={newInvoiceData.tipologia || ''}
        onChange={(event) =>
          setNewInvoiceData({
            ...newInvoiceData,
            tipologia: event.target.value,
          })
        }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '5px',marginLeft: '5px' }}
      />
    </label>


 


    <label>
    Importe:
      <input
        type="number"
        value={newInvoiceData.importe || ''}
        onChange={(event) =>
          setNewInvoiceData({
            ...newInvoiceData,
            importe: Number(event.target.value),
          })
        }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '8px',width: '50px' }}
      />
    </label>
    <label>
  Jaula:
   <input
    type="number"
    value={newInvoiceData.jaula || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        jaula: Number(event.target.value),
      })
    }
    style={{ borderRadius: '5px', marginRight: '5px',width: '50px'  }}
  />
</label>






    <label>
    Chip:
      <input
        type="number"
        value={newInvoiceData.chip || ''}
        onChange={(event) =>
          setNewInvoiceData({
            ...newInvoiceData,
            chip: Number(event.target.value),
          })
        }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px' }}
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
  Numero de Factura:
  <input
    type="number"
    value={newInvoiceData.numerofac || ''}
    onChange={(event) =>
      setNewInvoiceData({
        ...newInvoiceData,
        numerofac: Number(event.target.value),
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
      Tipologia:
        <input
          type="text"
          value={updatedData.tipologia || ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              tipologia: event.target.value,
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px' }}
        />
      </label>


 


<label>
  Importe:
  <input
    type="number"
    value={updatedData.importe || ''}
    onChange={(event) =>
      setUpdatedData({
        ...updatedData,
        importe: Number(event.target.value),
      })
    }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '50px' }}
  />
</label>
      <label >
      Jaula:
        <input
          type="number"
          value={updatedData.jaula|| ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              jaula: Number(event.target.value),
            })
          }style={{ borderRadius: '5px',marginBottom: '10px',marginRight: '10px',marginLeft: '10px',width: '50px' }}
        />
      </label>


      <label >
      Chip:
        <input
          type="number"
          value={updatedData.chip|| ''}
          onChange={(event) =>
            setUpdatedData({
              ...updatedData,
              chip: Number(event.target.value),
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
    onChange: (selectedRowKeys: React.Key[], selectedRows: Facturas[]) => {
      setSelectedInvoices(selectedRowKeys.map((key) => Number(key)));
    },
  }}
/>


</>
  );
}
export default HistorialFacturacion;


