import React from 'react';
import Paint from '../../assets/menu/paint.png';
import './paint.css'

const Escribir = props => {
  return (
    <span onClick={props.openModal} className="Paint_Logo_Container">
      <img className="Paint" src={Paint} alt="escribir post"/>
    </span>
  );
}

export default Escribir;