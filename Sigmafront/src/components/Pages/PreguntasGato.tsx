import { Form, Input } from 'antd';

const PreguntasGato = () => {
  return (
    <>
      <Form.Item
        name="nombreGato"
        label="En el pasado, has tenido gato?"
        rules={[{ required: true, message: 'Por favor ingresa Por favor ingresa tu respuesta' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="razaGato"
        label="Raza de tu gato"
        rules={[{ required: true, message: 'Por favor ingresa la raza de tu gato' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="edadGato"
        label="Edad de tu gato"
        rules={[{ required: true, message: 'Por favor ingresa la edad de tu gato' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="gatocasa2" label="¿Tienes algún espacio específico en tu casa para un gato?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="gatocaracter" label="¿Qué características buscas en un gato?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="gatocasa" label="¿Tu casa es adecuada para un gato?En el caso de tener terraza/balcon, tiene estas zonas protegidas?" rules={[{ required: true, message: 'Por favor ingresa tu respuesta' }]}>
        <Input.TextArea rows={4} />
      </Form.Item>

    </>
  );
};

export default PreguntasGato;