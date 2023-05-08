import React, { Component } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { Facturas } from './FacturasInterfaz';

interface ListaFacturasProps {}

interface ListaFacturasState {
  modalVisible: boolean;
  modalCargando: boolean;
  modalTitle: string;
  facturaSeleccionada: Facturas;
  facturas: Facturas[];
}

class ListaFacturas extends Component<ListaFacturasProps, ListaFacturasState> {
  formRef = React.createRef<FormInstance>();

  state: ListaFacturasState = {
    modalVisible: false,
    modalCargando: false,
    modalTitle: '',
    facturaSeleccionada: {} as Facturas,
    facturas: [],
  };

  componentDidMount() {
    const facturasEjemplo = [
      {
        id: 1,
        fecha: "2023-05-06",
        concepto: "Compra de suministros de oficina",
        debe: 1000,
        haber: 0,
        saldo: 1000,
      },
      {
        id: 2,
        fecha: "2023-05-06",
        concepto: "Pago de renta",
        debe: 0,
        haber: 2000,
        saldo: -1000,
      },
      {
        id: 3,
        fecha: "2023-05-06",
        concepto: "Venta de productos",
        debe: 0,
        haber: 5000,
        saldo: 4000,
      },
    ];
// Llama a la API o utiliza los datos de ejemplo en Gestiones.tsx para obtener la lista de tareas
  
//   fetch("url_de_la_api")
//   .then((response) => response.json())
//   .then((data) => {
//     const tareas = data.map((item: any) => ({
//       id: item.id,
//       descripcion: item.descripcion,
//       fechaVencimiento: item.fechaVencimiento,
//       prioridad: item.prioridad,
//       estado: item.estado,
//       urgente: item.urgente,
//       idGestion: item.idGestion,
//       nombre: item.nombre,
//       chip: item.chip,
//       tipo: item.tipo,
//     }));
//     setTareas(tareas);
//   })
//   .catch((error) => console.error(error));
// }, []);
    this.setState({
      facturas: facturasEjemplo,
    });
  }

  mostrarModalAgregar = () => {
    this.setState({
      modalVisible: true,
      modalTitle: 'Agregar factura',
      facturaSeleccionada: {} as Facturas,
    });
  };

  mostrarModalEditar = (factura: Facturas) => {
    this.setState({
      modalVisible: true,
      modalTitle: 'Editar factura',
      facturaSeleccionada: factura,
    });
  };

  ocultarModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  guardarFactura = () => {
    const form = this.formRef.current;
    form?.validateFields().then((values) => {
      form.resetFields();
      const { facturas, facturaSeleccionada } = this.state;
      if (facturaSeleccionada && facturaSeleccionada.id) {
        const indice = facturas.findIndex((f) => f.id === facturaSeleccionada.id);
        if (indice !== -1) {
          facturas[indice] = {
            ...facturaSeleccionada,
            ...values,
          };
          this.setState({
            facturas,
            modalVisible: false,
          });
        }
      } else {
        const nuevaFactura = {
          id: facturas.length + 1,
          ...values,
          saldo: facturaSeleccionada.debe - facturaSeleccionada.haber,
        };
        this.setState({
          facturas: [...facturas, nuevaFactura],
          modalVisible: false,
        });
      }
    });
  };

  eliminarFactura = (factura: Facturas) => {
    const { facturas } = this.state;
    const nuevasFacturas = facturas.filter((f) => f.id !== factura.id);
    this.setState({
      facturas: nuevasFacturas,
    });
  };

  render() {
    const { facturas, modalVisible, modalCargando, modalTitle, facturaSeleccionada } = this.state;

    

    const columnas = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
      },
      {
        title: 'Nºfactura',
        dataIndex: 'nºfactura',
        key: 'nºfactura',
      },
      {
        title: 'Tipologia',
        dataIndex: 'tipologia',
        key: 'tipologia',
      },
      {
        title: 'Concepto',
        dataIndex: 'concepto',
        key: 'concepto',
      },
    
      {
        title: 'Importe',
        dataIndex: 'importe',
        key: 'importe',
      },
      {
        title: 'Pagada',
        dataIndex: 'pagada',
        key: 'pagada',
      },
      {
        title: 'Chip',
        dataIndex: 'chip',
        key: 'chip',
      },
      {
        title: 'Jaula',
        dataIndex: 'jaula',
        key: 'jaula',
      },
      {
        title: 'Acciones',
        dataIndex: '',
        key: 'acciones',
        render: (factura: Facturas) => (
          <>
            <Button type="link" onClick={() => this.mostrarModalEditar(factura)}>
              Editar
            </Button>
            <Button type="link" danger onClick={() => this.eliminarFactura(factura)}>
              Eliminar
            </Button>
          </>
        ),
      },
    ];



    return (
      <>
        <Button type="primary" onClick={this.mostrarModalAgregar}>
          Agregar factura
        </Button>
        <Table dataSource={facturas} columns={columnas} />

        <Modal
          title={modalTitle}
          visible={modalVisible}
          onCancel={this.ocultarModal}
          footer={[
            <Button key="cancel" onClick={this.ocultarModal}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" loading={modalCargando} onClick={this.guardarFactura}>
              Guardar
            </Button>,
          ]}
        >
          <Form layout="vertical" ref={this.formRef} initialValues={facturaSeleccionada}>
            <Form.Item name="fecha" label="Fecha" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input type="date" /> </Form.Item>
            
            <Form.Item name="nºfactura" label="'Nºfactura" rules={[{ required: true, message: 'Este campo es obligatorio' }]}> <Input /></Form.Item>
           
            <Form.Item name="tipologia" label="Tipologia" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input type="number" min={0} /></Form.Item>
            
            <Form.Item name="concepto" label="Concepto" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input type="number" min={0} /></Form.Item>

            <Form.Item name="importe" label="'Importe" rules={[{ required: true, message: 'Este campo es obligatorio' }]}> <Input /></Form.Item>

            <Form.Item name="pagada" label="'Pagada" rules={[{ required: true, message: 'Este campo es obligatorio' }]}> <Input /></Form.Item>

            <Form.Item name="chip" label="Chip" rules={[{ required: true, message: 'Este campo es obligatorio' }]}> <Input /></Form.Item>

            <Form.Item name="Jaula" label="Jaula" rules={[{ required: true, message: 'Este campo es obligatorio' }]}> <Input /></Form.Item>

          </Form>
        </Modal>
      </>
    );
  }
}

export default ListaFacturas;


