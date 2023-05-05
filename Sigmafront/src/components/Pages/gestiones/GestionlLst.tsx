import React, { useState, useEffect } from 'react';

const API_URL = 'localhost:8080/api/gestiones/';

interface Gestion {
  id: number;
  descripcion: string;
  estado: string;
}

const GestionList: React.FC = () => {
  const [gestiones, setGestiones] = useState<Gestion[]>([]);

  useEffect(() => {
    const fetchGestiones = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setGestiones(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGestiones();
  }, []);

  return (
    <div>
      <h1>Gestiones</h1>
      <ul>
        {gestiones.map((gestion) => (
          <li key={gestion.id}>
            <h2>{gestion.descripcion}</h2>
            <p>Estado: {gestion.estado}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionList;