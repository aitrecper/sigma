import React, { useState } from 'react';
import { Form, Input, Button, message, Select } from 'antd';
import PreguntasGato from './PreguntasGato';
import PreguntasPerro from './PreguntasPerro';

const { Option } = Select;

interface FormValues {
  nombre: string;
  dni: string;
  nacimiento: string;
  mail: string;
  telefono: string;
  direccion: string;
  tipoanimal: string;
  tenido: string;
  raza: string;
  edad: string;
  tamano: string;
  gatocasa: string;
  niños: string;
  gatocaracter: string;
  gatocasa2: string;
  niños2: string;
  gatocaracter2: string;
  interes: string;
  interes2: string;
  mascotatiene:string;
}

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [animalSeleccionado, setAnimalSeleccionado] = useState<string | null>(null);
  const [mascotaTiene, setMascotaTiene] = useState<string | null>(null);
 

  const handleAnimalSeleccionado = (value: string | null) => {
    setAnimalSeleccionado(value);
  };

  const handleMascotaTiene = (value: string | null) => {
    setMascotaTiene(value);
  };

  const onFinish = async (values: FormValues) => {
    setLoading(true);

    // muestra mensaje confirmacion
    message.success('Solicitud enviada, en breves nos pondremos en contacto contigo!');
    setLoading(false);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="nombre" label="Nombre completo" rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}>
        <Input />
      </Form.Item>

      <Form.Item name="dni" label="DNI" rules={[{ required: true, message: 'Por favor ingresa tu DNI' }]}>
        <Input />
      </Form.Item>

      <Form.Item name="nacimiento" label="Nacimiento" rules={[{ required: true, message: 'Por favor ingresa tu fecha de nacimiento' }]}>
        <Input />
      </Form.Item>

      <Form.Item name="mail" label="Correo electrónico" rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico' }, { type: 'email', message: 'Ingresa un correo electrónico válido' }]}>
        <Input />
      </Form.Item>

      <Form.Item name="telefono" label="Telefono" rules={[{ required: true, message: 'Por favor ingresa tu telefono' }]}>
        <Input.TextArea rows={1} />
      </Form.Item>

      <Form.Item name="direccion" label="Direccion" rules={[{ required: true, message: 'Por favor ingresa tu Direccion' }]}>
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item name="tenido" label="Has tenido perro/gato anteriormente?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={2} />
      </Form.Item>


      <Form.Item name="edad" label="Tienes preferencia de edad para tu mascota?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={2} />
      </Form.Item>

      <Form.Item name="gatocasa" label="¿El animal conviviria con algun otro tipo de mascota?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={1} />
      </Form.Item>



      <Form.Item
        name="mascotatiene"
        label="Selecciona si es alguno de los siguientes:"
        rules={[{ required: false, message: 'Por favor ingresa que tipo de animal te interesa' }]}
      >
        <Select placeholder="Selecciona el tipo de animal" onChange={handleMascotaTiene}>
          <Option value="gato">Gato</Option>
          <Option value="perro">Perro</Option>
          <Option value="conejo">Conejo</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="tipoanimal"
        label="En que tipo de animal estás interesado?"
        rules={[{ required: true, message: 'Por favor ingresa que tipo de animal te interesa' }]}
      >
        <Select placeholder="Selecciona el tipo de animal" onChange={handleAnimalSeleccionado}>
          <Option value="gato">Gato</Option>
          <Option value="perro">Perro</Option>
        </Select>
      </Form.Item>

      {animalSeleccionado === 'gato' && <PreguntasGato />}
      {animalSeleccionado === 'perro' && <PreguntasPerro />}


      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
    
  );
};

export default ContactForm;