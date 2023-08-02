import Colaborador from '../Colaborador'
import './Equipo.css'


const Equipo = (props) => {
    const {titulo, colorPrimario, colorSecundario} = props.datos
    const { colaboradores } = props
    const estiloEquipo={backgroundColor:colorSecundario}
    const estiloTitulo={borderColor: colorPrimario}
    return <>
        { colaboradores.length > 0 &&
        <section className="equipo" style={estiloEquipo}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        colorPrimario={colorPrimario} 
                        key={index}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default Equipo