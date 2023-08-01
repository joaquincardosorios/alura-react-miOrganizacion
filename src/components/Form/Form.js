import Boton from "../Boton"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import "./Form.css"


const Form = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Manejar el envio', e)
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
                />
                <CampoTexto
                    titulo='Puesto'
                    placeholder='Ingresar Puesto'
                    required
                />
                <CampoTexto
                    titulo='Foto'
                    placeholder='Ingresar enlace de la Foto'
                    required
                />
                <ListaOpciones 
                    required
                />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}

export default Form