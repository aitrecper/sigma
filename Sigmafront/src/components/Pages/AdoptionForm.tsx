import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

interface FormValues {
  nombre: string,
  dni:string,
  nacimiento:string,
  mail: string, 
  telefono: string, 
  direccion: string, 
  tipoanimal: string,
  tenido:string,
  raza: string, 
  edad: string, 
  tamano: string, 
  gatocasa:string, 
  niños:string,
  gatocaracter:string,
  gatocasa2:string,
  niños2:string, 
  gatocaracter2:string,
  interes:string,
  interes2:string,
}

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="direccion" label="Direccion" rules={[{ required: true, message: 'Por favor ingresa tu Direccion' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="tipoanimal" label="En que tipo de animal estes interesado?" rules={[{ required: true, message: 'Por favor ingresa que tipo de animal te interesa' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="tenido" label="Has tenido perro/gato anteriomente?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="raza" label="Estas interesado en alguna raza en concreto?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="edad" label="Tienes que tu mascota tenga algun tipo de preferencia de edad?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="tamaño" label="Te interesa que tu futuro mejor amigo tenga algun tamaño en concreto?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;