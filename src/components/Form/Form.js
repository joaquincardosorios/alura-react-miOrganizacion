import React, { useState } from 'react';
import Boton from "../Boton"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import "./Form.css"


const Form = (props) => {
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [equipo, setEquipo] = useState('')

    const [titulo, setTitulo] = useState('')
    const [color, setColor] = useState('')

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datos)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }

    return(
        <section className="formulario">
            <form 
                onSubmit = {manejarEnvio}
            >
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo
                    titulo='Nombre'
                    placeholder='Ingresar Nombre'
                    required
                    valor={nombre}
                    setValor={setNombre}
                />
                <Campo
                    titulo='Puesto'
                    placeholder='Ingresar Puesto'
                    required
                    valor={puesto}
                    setValor={setPuesto}
                />
                <Campo
                    titulo='Foto'
                    placeholder='Ingresar enlace de la Foto'
                    required
                    valor={foto}
                    setValor={setFoto}
                />
                <ListaOpciones 
                    required
                    valor={equipo}
                    setValor={setEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form 
                onSubmit = {manejarNuevoEquipo}
            >
                <h2>Rellena el formulario para crear el equipo</h2>
                <Campo
                    titulo='Titulo'
                    placeholder='Ingresar Titulo'
                    required
                    valor={titulo}
                    setValor={setTitulo}
                />
                <Campo
                    titulo='Color'
                    placeholder='Ingresar el color en Hex'
                    required
                    valor={color}
                    setValor={setColor}
                    type='color'
                />
                <Boton>
                    Registrar Equipo
                </Boton>
            </form>
        </section>
    )
}

export default Form