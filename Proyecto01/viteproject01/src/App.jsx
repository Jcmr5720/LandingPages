import React, { useState } from 'react';
import './App.css';
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import JSConfetti from 'js-confetti'
import axios from 'axios';

export function App() {
    const jsConfetti = new JSConfetti();
    const [form, setForm] = useState({
        nombre: '',
        edad: ''
    });

    const [mensaje, setMensaje] = useState('');

    const cambio = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const borrar = (e) => {
        e.preventDefault();
        setForm({ nombre: '', edad: '' });
        setMensaje('');
    };

    const enviar = (e) => {
        e.preventDefault();
        if (form.nombre === '' || form.edad === '') {
            setMensaje('Error: no se han completado todos los campos');
        } else if (form.edad < 0) {
            setMensaje('Error: la edad no puede ser negativa');
        } else {
            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            });
            setMensaje(`Hola, tus datos son:<br/>Nombre: ${form.nombre}<br/>Edad: ${form.edad}`);
            console.log(form);

            // Enviar los datos al backend
            const url = 'http://localhost:3001'; // Ruta en el backend para insertar los datos
            const data = {
                nombre: form.nombre,
                edad: form.edad
            };
            axios.post(url, data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    const eliminar1 = () => {
        setForm({ ...form, nombre: '' });
    };

    const eliminar2 = () => {
        setForm({ ...form, edad: '' });
    };

    return (
        <>
            <section className='main1'>
                <div className='divformulario'>
                    <h1>Formulario con | React- Vite - Azure |</h1>
                    <form className='formulario' onSubmit={enviar}>
                        <label>
                            <div className='label1'>
                                <span><AiOutlineArrowRight /></span>
                                <input type='text' name='nombre' value={form.nombre} placeholder='Escribe tu nombre' onChange={cambio} />
                                <span className='logox' onClick={eliminar1}><AiOutlineClose /></span>
                            </div>
                        </label>
                        <label>
                            <div className='label1'>
                                <span><AiOutlineArrowRight /></span>
                                <input type='number' name='edad' value={form.edad} placeholder='Escribe tu edad' onChange={cambio} />
                                <span className='logox' onClick={eliminar2}><AiOutlineClose /></span>
                            </div>
                        </label>
                        <div className='formButtons'>
                            <button type='submit'>Enviar</button>
                            <button type='button' onClick={borrar}>Borrar datos</button>
                        </div>
                    </form>
                </div>
                {mensaje && (
                    <div className='divtext'>
                        <span dangerouslySetInnerHTML={{ __html: mensaje }}></span>
                    </div>
                )}
            </section>
        </>
    );
}
