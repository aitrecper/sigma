import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const FamilyForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [requirements, setRequirements] = useState('');
  const [tipoanimal, setTipoanimal] = useState('cat');
  const [tenido, setTenido] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [tamano, setTamano] = useState('pequenio');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      requirements: requirements.split(','),
      tipoanimal,
      tenido,
      raza,
      edad,
      tamano,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Nombre">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Requisitos">
        <Input value={requirements} onChange={(e) => setRequirements(e.target.value)} />
      </Form.Item>
      <Form.Item label="Tipo de mascota">
        <Select value={tipoanimal} onChange={(value) => setTipoanimal(value)}>
          <Option value="cat">Gato</Option>
          <Option value="dog">Perro</Option>
        </Select>
      </Form.Item>
      {tipoanimal === 'cat' ? (
        <Form.Item label="Has tenido gato anteriormente?">
          <Select value={tenido} onChange={(value) => setTenido(value)}>
            <Option value="Si">Si</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>
      ) : (
        <>
          <Form.Item label="Raza">
            <Input value={raza} onChange={(e) => setRaza(e.target.value)} />
          </Form.Item>
          <Form.Item label="Edad">
            <Input value={edad} onChange={(e) => setEdad(e.target.value)} />
          </Form.Item>
          <Form.Item label="Tamaño">
            <Select value={tamano} onChange={(value) => setTamano(value)}>
              <Option value="pequenio">Pequeño</Option>
              <Option value="mediano">Mediano</Option>
              <Option value="grande">Grande</Option>
            </Select>
          </Form.Item>
        </>
      )}
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form>
  );
};

FamilyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FamilyForm;