import React, { useEffect, useState } from 'react';
import Select from './components/Select';
import { getRegiones, getComunas } from './services/LocationService';
import './App.css';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [regiones, setRegiones] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedComuna, setSelectedComuna] = useState(null);

  useEffect(() => {
    setRegiones(getRegiones());
    setLoading(false);
  }, [])

  useEffect(() => {
    if (selectedRegion) {
      setComunas(getComunas(selectedRegion));
      setSelectedComuna(null);
    }
  }, [selectedRegion])

  const regionesData = {
    'name': 'regiones',
    'id': 'regiones',
    'title': 'Seleccione la Región',
    'data': regiones
  }
  const comunasData = {
    'name': 'comunas',
    'id': 'comunas',
    'title': 'Seleccione la Comuna',
    'data': comunas
  }

  return (
    <div className="App">
      <Select
        data={regionesData}
        disabled={loading}
        onChange={e => {
          setSelectedRegion(e.currentTarget.value)
        }}
      />
      <Select
        data={comunasData}
        disabled={loading}
        onChange={e => {
          setSelectedComuna(e.currentTarget.value)
        }}
      />
      {selectedRegion && selectedComuna ?
        <>
          <p>Region: {selectedRegion}</p>
          <p>Comuna: {selectedComuna}</p>
        </> : ''}
    </div>
  );
}

export default App;
