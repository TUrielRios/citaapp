import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import penguin from '../../Assets/penguin.png'

const getRandomPosition = () => ({
  top: Math.random() * window.innerHeight - 50,
  left: Math.random() * window.innerWidth - 100,
});

// Hook personalizado para ejecutar una función en intervalos regulares
const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

function Home() {
  const [esquivando, setEsquivando] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(getRandomPosition());
  const navigate = useNavigate();

  // Mover el botón "no" en intervalos regulares si esquivando es verdadero
  useInterval(() => {
    if (esquivando) {
      setButtonPosition(getRandomPosition());
    }
  }, 500); // Cambia el intervalo según sea necesario (ahora cada 0.5 segundos)

  const handleSiClick = () => {
    navigate('/esunacita');
  };

  const handleNoClick = () => {
    if (!esquivando) {
      setEsquivando(true);
    }
  };

  return (
    <div className="App">
      <img src={penguin} alt="Descripción de la imagen" style={{ maxWidth: '30%', marginBottom: '10px' }} />
      <h2>Estás para dormir juntos viernes y sábado mi amor? <br/> (una en mi casa y una en la tuya)</h2>
      <button onClick={handleSiClick} className='button-yes' style={{ marginRight: '10px' }}>Si mi amor!!</button>
      <button className='button-no'
        style={{
          position: esquivando ? 'absolute' : 'static',
          top: buttonPosition.top,
          left: buttonPosition.left,
        }}
        onClick={handleNoClick}
      >
        no, porque soy sucia
      </button>
    </div>
  );
}

export default Home;
