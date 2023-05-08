import { Form, Input } from 'antd';

const PreguntasPerro = () => {
  return (
    <>
      <Form.Item
        name="nombrePerro"
        label="Estas interesado por alguno de los perros en concreto? Indica su nombre a continuacion"
        rules={[{ required: true, message: 'Por favor ingresa el nombre de tu perro' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="razaPerro"
        label="En caso de no ser posible, te interesa alguna raza en concreto?"
        rules={[{ required: true, message: 'Por favor ingresa la raza de tu perro' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="edadPerro"
        label="Tienes algun tipo de preferencia de edad?"
        rules={[{ required: true, message: 'Por favor ingresa la edad de tu perro' }]}
      >
        <Input />
      </Form.Item>

      
      <Form.Item name="tenido" label="Has tenido perro anteriormente?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      
      <Form.Item name="tamano" label="Te interesa que tu futuro mejor amigo tenga algún tamaño en concreto?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="gatocasa" label="¿El perro conviviria con algun otro tipo de mascota?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="niños" label="¿Tienes niños en casa?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="gatocasa2" label="¿Tienes algún espacio específico en tu casa para un perro?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

    </>
  );
};

export default PreguntasPerro;