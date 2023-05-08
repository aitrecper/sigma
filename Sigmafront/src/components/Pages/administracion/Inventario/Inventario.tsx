import React, { Component } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { Inventario } from './Inventarioapp';
import { FormInstance } from 'antd';

interface ListaInventarioState {

  modalVisible: boolean;
  modalCargando: boolean;
  modalTitle: string;
  inventarioSeleccionado: Inventario;
  inventario: Inventario[];
}

class ListaInventario extends Component<{}, ListaInventarioState> {
  formRef = React.createRef<FormInstance>();

  state: ListaInventarioState = {
    modalVisible: false,
    modalCargando: false,
    modalTitle: '',
    inventarioSeleccionado: {} as Inventario,
    inventario: [],
  };

  componentDidMount() {
    const inventario = [
      {
id: 1,
nºfactura: 123,
producto: 'pienso',
tipologia: 'perro',
abierto: 'no',
fechacaducidad: '01-01-2022',
cantidad: 1,
},
];
// componentDidMount() {
//   // Llama a la API para obtener la lista de inventario
//   fetch("url_de_la_api")
//     .then((response) => response.json())
//     .then((data) => {
//       const inventario = data.map((item: any) => ({
//         id: item.id,
//         producto: item.producto,
//         tipologia: item.tipologia,
//         abierto: item.abierto,
//         fechacaducidad: item.fechacaducidad,
//         cantidad: item.cantidad,
//       }));
//       this.setState({
//         inventario: inventario,
//       });
//     })
//     .catch((error) => console.error(error));
// }


  this.setState({
    inventario: inventario,
  });
}
mostrarModalAgregar = () => {
  this.setState({
    modalVisible: true,
    modalTitle: 'Agregar producto',
    inventarioSeleccionado: {} as Inventario,
  });
};

  
mostrarModalEditar = (inventario: Inventario) => {
  this.setState({
    modalVisible: true,
    modalTitle: 'Editar producto',
    inventarioSeleccionado: inventario,
  });
  this.formRef.current?.setFieldsValue(inventario);
};
ocultarModal = () => {
  this.setState({
    modalVisible: false,
  });
};

guardarInventario = () => {
  const form = this.formRef.current;
  form?.validateFields().then((values) => {
    const { inventario, inventarioSeleccionado } = this.state;
    if (inventarioSeleccionado && inventarioSeleccionado.id) {
      const indice = inventario.findIndex((f) => f.id === inventarioSeleccionado.id);
      if (indice !== -1) {
        inventario[indice] = {
          ...inventarioSeleccionado,
          ...values,
        };
        this.setState({
          inventario,
          modalVisible: false,
        });
      }
    } else {
      const nuevoInventario = {
        id: inventario.length + 1,
        ...values,
      };
      this.setState({
        inventario: [...inventario, nuevoInventario],
        modalVisible: false,
      });
    }
    form.resetFields(); // Mover resetFields aquí
  });
};


          eliminarInventario = (inventario: Inventario) => {
            const nuevasInventario = this.state.inventario.filter((f) => f.id !== inventario.id);
            this.setState({
              inventario: nuevasInventario,
            });
          };
  
                render() {
                  const { inventario, modalVisible, modalCargando, modalTitle, inventarioSeleccionado } = this.state;


                  const columnas = [
                    { title: 'id', dataIndex: 'id' },
                    { title: 'NºFactura', dataIndex: 'nºactura' },
                    { title: 'Tipologia', dataIndex: 'tipologia' },
                    { title: 'Producto', dataIndex: 'producto' },
                    { title: 'Abierto', dataIndex: 'abierto' },
                    { title: 'Fechacaducidad', dataIndex: 'fechacaducidad' },
                    { title: 'Cantidad', dataIndex: 'cantidad' },
                    {
                      title: 'Acciones',
                      dataIndex: '',
                      key: 'acciones',
                      render: (inventario: Inventario) => (
                        <>
                          <Button type="link" onClick={() => this.mostrarModalEditar(inventario)}>
                            Editar
                          </Button>
                          <Button type="link" danger onClick={() => this.eliminarInventario(inventario)}>
                            Eliminar
                          </Button>
                        </>
                      ),
                    },
                  ];


                  return (
                    <>
      

      
      <Button type="primary" onClick={this.mostrarModalAgregar}>
          Agregar inventario
        </Button>
    <Table dataSource={inventario} columns={columnas} />

    <Modal
          title={modalTitle}
          visible={modalVisible}
          onCancel={this.ocultarModal}
          footer={[
            <Button key="cancel" onClick={this.ocultarModal}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" loading={modalCargando} onClick={this.guardarInventario}>
              Guardar
            </Button>,
          ]}
        >
          <Form layout="vertical" ref={this.formRef} initialValues={inventarioSeleccionado}>
            <Form.Item name="producto" label="Fecha" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input type="date" /> </Form.Item>
            
            <Form.Item name="tipologia" label="Nºfactura" rules={[{ required: true, message: 'Este campo es obligatorio' }]}> <Input type="number" min={0} /></Form.Item>
           
            <Form.Item name="abierto" label="Tipologia" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input /></Form.Item>
            
            <Form.Item name="fechacaducidad" label="Concepto" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input /></Form.Item>

            <Form.Item name="cantidad" label="Importe" rules={[{ required: true, message: 'Este campo es obligatorio' }]}><Input type="number" min={0} /></Form.Item>

            

          </Form>
        </Modal>
      </>
    );
  }
}

export default ListaInventario;