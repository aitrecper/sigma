import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Row, Col, Card, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import FamilyForm from './familyform';
import daliaImage from './Dalia.jpg';
import siriusImage from './Sirius.jpg';

const { Title, Text } = Typography;

// Componente Animal que muestra la información de un animal
const Animal = ({ name, imageUrl, requirements, tipoanimal, tenido, raza, edad, tamano }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <div>
        <img src={imageUrl} alt={name} style={{ width: '50%', maxHeight: 300 }} />
      </div>
      <Title level={4}>{name}</Title>
      <Text>Tipo de mascota: {tipoanimal === 'cat' ? 'Gato' : 'Perro'}</Text>

      {tipoanimal === 'cat' ? (
        <>
          <Text>Has tenido gato anteriormente? {tenido}</Text>
        </>
      ) : (
        <>
          <Text>Estás interesado en alguna raza en concreto? {raza}</Text>
          <Text>Cuál es la edad aproximada en la que estás interesado? {edad}</Text>
          <Text>Tamaño: {tamano}</Text>
        </>
      )}
      <Text>Requisitos:</Text>
      <ul>
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </Card>
  );
};

// Definimos las propiedades requeridas y sus tipos para el componente Animal
Animal.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  tipoanimal: PropTypes.oneOf(['cat', 'dog']).isRequired,
  tenido: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tamano: PropTypes.oneOf(['pequenio', 'mediano', 'grande']),
};

// Componente Family que muestra la información de una familia
const Family = ({ name, requirements }) => {
  return (
    <Card>
      <Title level={3}>{name}</Title>
      <Text>Requisitos:</Text>
      <ul>
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </Card>
  );
};

// Definimos las propiedades requeridas y sus tipos para el componente Family
Family.propTypes = {
  name: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Componente Match que permite buscar y mostrar animales y familias compatibles
const Match = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [family, setFamily] = useState(null);
  const [tipoanimal, setTipoanimal] = useState('cat');
  const [tenido, setTenido] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState('');
  const [tamano, setTamano] = useState('pequenio');
  const animals = [
    // Array de animales con sus características
    {
      name: 'Dalia',
      imageUrl: daliaImage,
      requirements: ['Espacio abierto', 'Tiempo para pasear', 'Gatos'],
      tipoanimal: 'dog',
      tenido: 'No',
    },
    {
      name: 'Pipilotta',
      imageUrl: daliaImage,
      requirements: ['Caja de arena', 'Juguetes', 'Niños'],
      tipoanimal: 'cat',
      tenido: '',
    },
    {
      name: 'Sirius',
      imageUrl: siriusImage,
      requirements: ['Espacio abierto', 'Tiempo para pasear', 'Perros'],
      tipoanimal: 'dog',
      raza: 'Labrador Retriever',
      edad: 3,
      tamano: 'grande',
    },
  ];

  // Función que maneja la búsqueda de animales por nombre
  const handleSearch = (name) => {
    const filteredAnimals = name.trim()
      ? animals.filter((item) =>
          item.name.toLowerCase().includes(name.toLowerCase())
        )
      : [];
    setFilteredAnimals(filteredAnimals);
  };

  // Función que filtra los animales según los requisitos de la familia
  const filterAnimals = (animal) => {
    if (!family) {
      return true;
    }
    const tipoanimalMatch =
      tipoanimal === 'cat' || (tipoanimal === 'dog' && animal.tipoanimal === 'dog');
    const tenidoMatch = tipoanimal === 'cat' ? true : animal.tenido.toLowerCase().includes(tenido.toLowerCase());
    const razaMatch = tipoanimal === 'dog' ? animal.raza.toLowerCase().includes(raza.toLowerCase()) : true;
    const edadMatch = edad === '' ? true : parseInt(edad) >= animal.edad;
    const tamanoMatch =
      tamano === 'pequenio' ||
      (tamano === 'mediano' && animal.tamano === 'mediano') ||
      (tamano === 'grande' && animal.tamano === 'grande');
    return (
      animal.requirements.every((req) => family.requirements.includes(req)) &&
      tipoanimalMatch &&
      tenidoMatch &&
      razaMatch &&
      edadMatch &&
      tamanoMatch
    );
  };

  // Obtenemos los animales a mostrar según los filtros aplicados
  const displayedAnimals =
    filteredAnimals.length > 0 ? filteredAnimals.filter(filterAnimals) : animals.filter(filterAnimals);

  // Función que maneja el envío del formulario con los datos de la familia
  const handleFamilySubmit = (familyData) => {
    setFamily(familyData);
    setFilteredAnimals([]);
  };

  return (
    <div className="app">
      <Title level={1}>Family Match</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          {family ? (
            <Family {...family} />
          ) : (
            <FamilyForm onSubmit={handleFamilySubmit} />
          )}
        </Col>
        <Col xs={24} sm={12}>
          <Input
            placeholder="Busca un animal por nombre"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch(e.target.value);
            }}
            prefix={<SearchOutlined />}
            style={{ marginBottom: 16 }}
          />
          <div style={{ maxHeight: 400, overflowY: 'scroll' }}>
            {displayedAnimals.length > 0 ? (
              displayedAnimals.map((animal, index) => (
                <Animal key={index} {...animal} />
              ))
            ) : (
              <Text>No hay animales que coincidan con los criterios de búsqueda</Text>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Match;