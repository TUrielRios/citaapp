import React from 'react';
import './Esunacita.css'; // Importa el archivo de estilos específico para EsunaCita
import pinguis from '../../Assets/pinguis.jpg'

const Esunacita = () => {
  return (
    <div className="esuna-cita">
      <img src={pinguis} alt="Descripción de la imagen" />
      <p>te amo pinguifuria dormis conmigo <br /> *no podes decir que no porque no sos ninguna sucia mi princesa.</p>
    </div>
  );
}

export default Esunacita;
