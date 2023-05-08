import React, { Component } from 'react';
import { Table, Button, Modal, Form, Input, Select, Switch } from 'antd';
import { TareaInterfaz, GestionesInterfaz } from './types';
import {UrgenciasVeterinarias} from './Urgenciastype';

const { Option } = Select;

interface ListaUrgenciasState {
  tareas: GestionesInterfaz[];
  modalVisible: boolean;
  tareaSeleccionada?: ListaUrgencias;
  modalCargando: boolean;
}




class ListaUrgencias extends Component<any, ListaUrgenciasState> {
  state: ListaUrgenciasState = {
    tareas: [],
    modalVisible: false,
    tareaSeleccionada: undefined,
    modalCargando: false,
  };

componentDidMount() {
  const tareasEjemplo = [
    {
      id: 1,
      descripcion: "Vacuna antirabia",
      nombre:"Dalia",
      chip:"0003",
      fechaVencimiento: "2023-05-10",
      prioridad: "alta",
      estado: "pendiente",
      urgente: true
    },

        {
            id: 2,
            descripcion: "Esterilizacion",
            nombre: "Sirius",
            chip: "0003",
            fechaVencimiento: "2023-05-12",
            prioridad: "media",
            estado: "en_proceso",
            urgente: false
          },
          

    {
      id: 3,
      descripcion: "Revision",
      nombre:"Dalia",
      chip:"0003",
      fechaVencimiento: "2023-05-08",
      prioridad: "baja",
      estado: "completada",
      urgente: false
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


  
  this.setState({ tareas: tareasEjemplo });
}

//ABRE LA VENTANA PARA AGREGAR 
  handleAgregarTarea = () => {
    this.setState({
      modalVisible: true,
      tareaSeleccionada: undefined,
    });
  };

//ABRE LA VENTANA PARA EDITAR
  handleEditarTarea = (tarea: GestionesInterfaz) => {
    this.setState({
      modalVisible: true,
      tareaSeleccionada: tarea,
    });
  };
//ELIMINA- FUTURA CONFIRMACION?
  handleEliminarTarea = (tarea: GestionesInterfaz) => {
    const tareas = this.state.tareas.filter((t) => t.id !== tarea.id);
    this.setState({ tareas });
  };

  handleSubmit = (values: TareaInterfaz & { idGestion?: number }) => {
    this.setState({ modalCargando: true });
  
    setTimeout(() => {
      const { tareas, tareaSeleccionada } = this.state;
  
      if (tareaSeleccionada) {
        // Si se está editando una tarea, actualiza la tarea seleccionada
        const tareaActualizada = { ...tareaSeleccionada, ...values };
        const nuevasTareas = tareas.map((t) =>
          t.id === tareaSeleccionada.id ? tareaActualizada : t
        );
        this.setState({ tareas: nuevasTareas, modalVisible: false, modalCargando: false });
      } else {
        // Si se está agregando una nueva tarea, agrega la tarea al final de la lista
        const nuevaTarea = { id: Date.now(), ...values };
        const nuevasTareas = [...tareas, nuevaTarea];
        this.setState({ tareas: nuevasTareas, modalVisible: false, modalCargando: false });
      }
    }, 1000);
  };
//CANCELA AGREGAR O EDITAR
  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { tareas, modalVisible, tareaSeleccionada, modalCargando } = this.state;

    const modalTitle = tareaSeleccionada ? 'Editar tarea' : 'Agregar tarea';

    return (
      <>
        <Button type="primary" onClick={this.handleAgregarTarea} style={{ marginBottom: 16 }}>
          Agregar tarea
        </Button>
        <Table dataSource={tareas} rowKey="id">
          {/* //CAMPOS QUE APARECEN EN LISTADO */}
          <Table.Column title="Fecha de vencimiento" dataIndex="fechaVencimiento" />
          <Table.Column title="Descripción" dataIndex="descripcion" />
          <Table.Column title="Nombre:" dataIndex="nombre" />
          <Table.Column title="Chip:" dataIndex="chip" />
          <Table.Column title="Prioridad" dataIndex="prioridad" />
          <Table.Column title="Estado" dataIndex="estado" />
          <Table.Column title="Urgente" dataIndex="urgente" render={(value) => (value ? 'Sí' : 'No')} />
          <Table.Column
            title=""
            key="acciones"
            render={(text, tarea: GestionesInterfaz) => (
              <>
                <Button onClick={() => this.handleEditarTarea(tarea)}>Editar</Button>
                <Button onClick={() => this.handleEliminarTarea(tarea)} danger>
                  Eliminar
                </Button>
              </>
            )}
          />
        </Table>
        <Modal
  title={modalTitle}
  visible={modalVisible}
  onCancel={this.handleCancel}
  footer={[
    <Button key="cancelar" onClick={this.handleCancel}>
      Cancelar
    </Button>,
    <Button key="guardar" type="primary" form="tareaForm" htmlType="submit" loading={modalCargando}>
      Guardar
    </Button>,
  ]}
>
  <Form id="tareaForm" onFinish={this.handleSubmit} initialValues={tareaSeleccionada}>
    <Form.Item label="Descripción" name="descripcion" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Fecha de vencimiento" name="fechaVencimiento" rules={[{ required: true }]}>
      <Input type="date" />
    </Form.Item>
    <Form.Item label="Prioridad" name="prioridad" rules={[{ required: true }]}>
      <Select>
        <Option value="baja">Baja</Option>
        <Option value="media">Media</Option>
        <Option value="alta">Alta</Option>
      </Select>
    </Form.Item>
    <Form.Item label="Estado" name="estado" rules={[{ required: false }]}>
      <Select>
        <Option value="pendiente">Pendiente</Option>
        <Option value="en_proceso">En proceso</Option>
        <Option value="completada">Completada</Option>
      </Select>
    </Form.Item>
    <Form.Item label="Urgente" name="urgente" valuePropName="checked">
      <Switch />
    </Form.Item>
    {/* Nuevos campos */}
    <Form.Item label="ID de gestión" name="idGestion">
      <Input type="number" />
    </Form.Item>
    <Form.Item label="Nombre" name="nombre">
      <Input />
    </Form.Item>
    <Form.Item label="Chip" name="chip" rules={[{ type: 'number' }]}>
      <Input type="number" />
    </Form.Item>
    <Form.Item label="Jaula" name="jaula" rules={[{ type: 'number' }]}>
      <Input type="number" />
    </Form.Item>
    <Form.Item label="Diagnóstico" name="diagnostico">
      <Input />
    </Form.Item>
    <Form.Item label="Histórico" name="historico">
      <Input />
    </Form.Item>
    <Form.Item label="Ficheros" name="ficheros" valuePropName="checked">
      <Switch />
    </Form.Item>
  </Form>
</Modal>
      </>
    );
  }
}

export default ListaUrgencias;