import React, { Component } from 'react';
import { Table, Button, Modal, Form, Input, Select, Switch } from 'antd';
import { CuidadorInterfaz } from './Cuidadorinterfaz';

const { Option } = Select;

interface ListaCuidadoresProps {}

interface ListaCuidadoresState {
  modalVisible: boolean;
  modalCargando: boolean;
  modalTitle: string;
  cuidadorSeleccionado: CuidadorInterfaz;
  cuidadores: CuidadorInterfaz[];
}

class ListaCuidadores extends Component<ListaCuidadoresProps, ListaCuidadoresState> {
  formRef = React.createRef<FormInstance>();

  state: ListaCuidadoresState = {
    modalVisible: false,
    modalCargando: false,
    modalTitle: '',
    cuidadorSeleccionado: {} as CuidadorInterfaz,
    cuidadores: [],
  };

  componentDidMount() {
    const cuidadoresEjemplo = [
      {
        id: "1",
        nombre: "Alicia",
        apellido1: "Casanova",
        apellido2: "Navarro",
        dni: "47000000C",
        mail: "ali@gmail.com",
        telefono: "600999000",
        usuario: "alinavarro"
      },
    ];
    // Llama a la API o utiliza los datos de ejemplo en Gestiones.tsx para obtener la lista de tareas
    //   fetch("url_de_la_api")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const cuidadores = data.map((item: any) => ({
    //       id: item.id,
    //       nombre: item.nombre,
    //       apellido1: item.apellido1,
    //       apellido2: item.apellido2,
    //       dni: item.dni,
    //       mail: item.mail,
    //       telefono: item.telefono,
    //       usuario: item.usuario,
    //     }));
    //     this.setState({ cuidadores });
    //   })
    //   .catch((error) => console.error(error));
    // }, []);
    this.setState({ cuidadores: cuidadoresEjemplo });
  }

  // ABRE LA VENTANA PARA AGREGAR
  handleAgregarCuidador = () => {
    this.setState({
      modalVisible: true,
      modalTitle: 'Agregar cuidador',
      cuidadorSeleccionado: {} as CuidadorInterfaz,
    });
  };

  // ABRE LA VENTANA PARA EDITAR
  handleEditarCuidador = (cuidador: CuidadorInterfaz) => {
    this.setState({
      modalVisible: true,
      modalTitle: 'Editar cuidador',
      cuidadorSeleccionado: cuidador,
    });
    this.formRef.current?.setFieldsValue(cuidador);
  };

  // ELIMINA- FUTURA CONFIRMACION?
  handleEliminarCuidador = (cuidador: CuidadorInterfaz) => {
    const cuidadores = this.state.cuidadores.filter((item) => item.id !== cuidador.id);
    this.setState({ cuidadores });
  };

  handleSubmit = (values: any) => {
    const { cuidadores, cuidadorSeleccionado } = this.state;
    const newCuidador = { ...cuidadorSeleccionado, ...values };
    if (cuidadorSeleccionado.id) {
      const index = cuidadores.findIndex((item) => item.id === cuidadorSeleccionado.id);
      cuidadores[index] = newCuidador;
    } else {
      newCuidador.id = cuidadores.length + 1;
      cuidadores.push(newCuidador);
    }
    this.setState({ cuidadores, modalVisible: false });
    this.formRef.current?.resetFields();
  };

  // CANCELA AGREGAR O EDITAR
  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
    this.formRef.current?.resetFields();
  };

  render() {
    const { modalVisible, modalTitle, cuidadorSeleccionado, cuidadores, modalCargando } = this.state;

    return (
      <>
        <Button type="primary" onClick={this.handleAgregarCuidador} style={{ marginBottom: 16 }}>
          Agregar cuidador
        </Button>
        <Table dataSource={cuidadores} rowKey="id">
          <Table.Column title="ID" dataIndex="id" />
          <Table.Column title="Nombre" dataIndex="nombre" />
          <Table.Column title="Primer apellido" dataIndex="apellido1" />
          <Table.Column title="Segundo apellido" dataIndex="apellido2" />
          <Table.Column title="DNI" dataIndex="dni" />
          <Table.Column title="Correo electrónico" dataIndex="mail" />
          <Table.Column title="Teléfono" dataIndex="telefono" />
          <Table.Column title="Usuario" dataIndex="usuario" />
          <Table.Column
            title=""
            key="acciones"
            render={(text, cuidador: CuidadorInterfaz) => (
              <>
                <Button onClick={() => this.handleEditarCuidador(cuidador)}>Editar</Button>
                <Button onClick={() => this.handleEliminarCuidador(cuidador)} danger>
                  Eliminar
                </Button>
              </>
            )}
          />
        </Table>
        <Modal
          visible={modalVisible}
          title={modalTitle}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancelar
            </Button>,
            <Button key="guardar" type="primary" form="cuidadorForm" htmlType="submit" loading={modalCargando}>
              Guardar
            </Button>,
          ]}
        >
          <Form id="cuidadorForm" onFinish={this.handleSubmit} initialValues={cuidadorSeleccionado} ref={this.formRef}>
            <Form.Item name="nombre" label="Nombre" rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="apellido1" label="Primer apellido" rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="apellido2" label="Segundo apellido">
              <Input />
            </Form.Item>
            <Form.Item name="dni" label="DNI" rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="mail" label="Correo electrónico" rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="telefono" label="Teléfono" rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="usuario" label="Usuario" rules={[{ required: true, message: 'Campo requerido' }]}>
              <Input />
            </Form.Item>
            
          </Form>
        </Modal>
      </>
    );
  }
}

export default ListaCuidadores;