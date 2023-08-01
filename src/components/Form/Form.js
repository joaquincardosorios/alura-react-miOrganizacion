import React, { useState } from 'react';
import Boton from "../Boton"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import "./Form.css"


const Form = (props) => {
    console.log(props.equipo)
    const [nombre, setNombre] = useState('')
    const [puesto, setPuesto] = useState('')
    const [foto, setFoto] = useState('')
    const [equipo, setEquipo] = useState('')

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datos)
    }

    return(
        <section className="formulario">
            <form 
                onSubmit = {manejarEnvio}
            >
                <h2>Rellena el formulario para crear el colaborador</h2>
                <CampoTexto
                    titulo='Nombre'
                    placeholder='Ingresar Nombre'
                    required
                    valor={nombre}
                    setValor={setNombre}
                />
                <CampoTexto
                    titulo='Puesto'
                    placeholder='Ingresar Puesto'
                    required
                    valor={puesto}
                    setValor={setPuesto}
                />
                <CampoTexto
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
        </section>
    )
}

export default Form