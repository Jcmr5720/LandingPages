import React, { useState } from 'react';
import './App.css';
import logo from './imgs/logo.png';
import { AiOutlineBook, AiOutlineArrowDown, AiOutlineWhatsApp, AiOutlineShareAlt, AiOutlineClose } from "react-icons/ai";

const App = () => {
  const [cuadro, setCuadro] = useState(false);

  const bCatalogo = () => {
    window.location.href = "#";
  };

  const bWhatsapp = () => {
    window.location.href = "#";
  };

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
              <span>Hola mundo jeje</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
