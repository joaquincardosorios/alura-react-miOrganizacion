import Colaborador from '../Colaborador'
import './Equipo.css'
import hexToRgba from 'hex-to-rgba'


const Equipo = (props) => {
    const {id, titulo, colorPrimario} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    const estiloEquipo={backgroundColor: hexToRgba(colorPrimario, 0.4)}
    const estiloTitulo={borderColor: colorPrimario}
    return <>
        { colaboradores.length > 0 &&
        <section className="equipo" style={estiloEquipo}>
            <input 
                type='color'
                className='input-color'
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        colorPrimario={colorPrimario} 
                        key={colaborador.id}
                        eliminarColaborador={eliminarColaborador}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default Equipo