import React, { useState } from 'react';
import './App.css';
import logo from './imgs/logo.png';
import {
  AiOutlineBook, AiOutlineArrowDown, AiOutlineWhatsApp, AiOutlineShareAlt,
  AiOutlineClose, AiOutlineRight, AiOutlineFacebook, AiOutlineLinkedin, AiFillTwitterSquare,
  AiOutlineMessage, AiOutlineMail, AiOutlineLink
} from "react-icons/ai";

const App = () => {
  const [cuadro, setCuadro] = useState(false);
  const url = window.location.href;

  const bCatalogo = () => {
    window.location.href = "#";
  };

  const bWhatsapp = () => {
    window.location.href = "#";
  };

  const cuadrob1 = () => {
    window.location.href = "#"
  }

  const cuadroi1 = () => {
    navigator.clipboard.writeText(url)
  }

  const bShare = () => {
    setCuadro(true);
  };

  const closeCuadro = () => {
    setCuadro(false);
  };

  return (
    <>
      <header>
        <div className='headerLogo'>
          <span className='btShare' onClick={bShare}><AiOutlineShareAlt size={32} /></span>
        </div>
      </header>
      <main>
        <div className='logoi'>
          <img src={logo} alt='Logo' onClick={bShare} />
        </div>
        <div className='text'>
          <span className='text1'>LUCY'S SHOP✨</span>
          <span className='text2'>Tienda virtual de maquillaje, cuidado facial y accesorios</span>
        </div>
        <div className='buttons'>
          <div className='button1' onClick={bCatalogo}>
            <span className='logo'><AiOutlineBook size={32} /></span>
            <span className='b1'>CATÁLOGO</span>
            <span className='down'><AiOutlineArrowDown size={16} /></span>
          </div>
          <div className='button2' onClick={bWhatsapp}>
            <span className='logo'><AiOutlineWhatsApp size={32} /></span>
            <span className='b2'>WHATSAPP</span>
            <span className='down'><AiOutlineArrowDown size={16} /></span>
          </div>
        </div>
      </main>
      {cuadro && (
        <div className='cuadro'>
          <div className='cuadro1'>
            <div className='buttons'>
              <span></span>
              <span>Compartir</span>
              <span><AiOutlineClose size={16} onClick={closeCuadro} /></span>
            </div>
            <div className='windows'>
              <div className='windowsB1' onClick={cuadrob1}>
                <span><AiOutlineFacebook size={32} /></span>
                <span>Compartir en Facebook</span>
                <span><AiOutlineRight size={32} /></span>
              </div>
              <div className='windowsB2' onClick={cuadrob1}>
                <span><AiOutlineLinkedin size={32} /></span>
                <span>Compartir en LinkedIn</span>
                <span><AiOutlineRight size={32} /></span>
              </div>
            </div>
            <div className='windowsB3' onClick={cuadrob1}>
              <span><AiFillTwitterSquare size={32} /></span>
              <span>Compartir en Twitter</span>
              <span><AiOutlineRight size={32} /></span>
            </div>
            <div className='windowsB4' onClick={cuadrob1}>
              <span><AiOutlineWhatsApp size={32} /></span>
              <span>Compartir en Whatsapp</span>
              <span><AiOutlineRight size={32} /></span>
            </div>
            <div className='windowsB5' onClick={cuadrob1}>
              <span><AiOutlineMessage size={32} /></span>
              <span>Compartir en Messenger</span>
              <span><AiOutlineRight size={32} /></span>
            </div>
            <div className='windowsB6' onClick={cuadrob1}>
              <span><AiOutlineMail size={32} /></span>
              <span>Compartir en Correo</span>
              <span><AiOutlineRight size={32} /></span>
            </div>
            <div className='windowsInput' onClick={cuadroi1}>
              <span><AiOutlineLink size={32} /></span>
              <span>{url}</span>
              <span>Copiar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
