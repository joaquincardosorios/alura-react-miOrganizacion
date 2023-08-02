import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg'
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    equipo: 'Front-End',
    foto: 'https://github.com/harlandlohora.png',
    nombre:'Joaquin Rios',
    puesto:'Analista Programador'
  }])

  // Ternario --> condicion ? seMuestra : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([
      ...colaboradores,
      colaborador
    ])
  }

  //Lista de equipos
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      {mostrarFormulario && 
        <Form 
          equipos={equipos.map(equipo => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter ( colaborador => colaborador.equipo === equipo.titulo )}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
