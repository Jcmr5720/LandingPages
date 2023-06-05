import React, { useState, useRef } from 'react';
import './App.css';

export function App() {
    const [form, setForm] = useState({
        nombre: '',
        edad: ''
    });

    const span1 = useRef('');
    const input1 = useRef();
    const input2 = useRef();

    const cambio = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const borrar = (e) => {
        e.preventDefault();
        input1.current.value = '';
        input2.current.value = '';
    };

    const enviar = (e) => {
        e.preventDefault();
        if (form.nombre === '' || form.edad === '') {
            span1.current.innerHTML = `Error: no se han completado todos los campos`;
        } else if (form.edad < 0) {
            span1.current.innerHTML = `Error: la edad no puede ser negativa`;
        } else {
            span1.current.innerHTML = `Hola, tus datos son:<br/>Nombre: ${form.nombre}<br/>Edad: ${form.edad}`;
            console.log(form);
        }
    };

    return (
        <>
            <section className='main1'>
                <div className='divformulario'>
                    <h1>Formulario con React-Vite</h1>
                    <form className='formulario' onSubmit={enviar}>
                        <label>
                            Nombre
                            <input type='text' name='nombre' value={form.nombre} placeholder='Escribe tu nombre' ref={input1} onChange={cambio} />
                        </label>
                        <label>
                            Edad
                            <input type='number' name='edad' value={form.edad} placeholder='Escribe tu edad' ref={input2} onChange={cambio} />
                        </label>
                        <div className='formButtons'>
                            <button type='submit'>Enviar</button>
                            <button type='button' onClick={borrar}>Borrar datos</button>
                        </div>
                    </form>
                </div>
                <div className='divtext'>
                    <span ref={span1}></span>
                </div>
            </section>
        </>
    );
}

