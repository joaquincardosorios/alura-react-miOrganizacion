import './Equipo.css'

const Equipo = (props) => {
    const {titulo, colorPrimario, colorSecundario} = props.datos
    const estiloEquipo={backgroundColor:colorSecundario}
    const estiloTitulo={borderColor: colorPrimario}
    return(
        <section className="equipo" style={estiloEquipo}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores"></div>
        </section>
    )
}

export default Equipo