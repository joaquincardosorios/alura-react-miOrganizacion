import { useState } from 'react';
import { v4 as uuid} from 'uuid'
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg'
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/joaquincardosorios.png',
    nombre:'Eduardo Jara',
    puesto:'Analista Programador',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'Front-End',
    foto: 'https://github.com/joaquincardosorios.png',
    nombre:'Joaquin Rios',
    puesto:'Analista Programador',
    fav:true
  },
  {
    id: uuid(),
    equipo: 'Data Science',
    foto: 'https://github.com/joaquincardosorios.png',
    nombre:'Melissa Muñoz',
    puesto:'Analista Programador',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'UX y Diseño',
    foto: 'https://github.com/joaquincardosorios.png',
    nombre:'Gustavo Ramirez',
    puesto:'Analista Programador',
    fav:false
  },
  {
    id: uuid(),
    equipo: 'Programación',
    foto: 'https://github.com/joaquincardosorios.png',
    nombre:'Francisco Jara',
    puesto:'Analista Programador',
    fav:false
  },
  ])
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  // Ternario --> condicion ? seMuestra : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([
      ...colaboradores,
      {...colaborador, id:uuid()}
    ])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    const colaboradoresActualizado = colaboradores.filter( colaborador => colaborador.id !== id)
    setColaboradores(colaboradoresActualizado)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = ((nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  })

  const like = ((id) => {
    const colaboradoresActualizado = colaboradores.map( (colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    setColaboradores(colaboradoresActualizado)
  })


  return (
    <div>
      <Header />
      {mostrarFormulario && 
        <Form 
          equipos={equipos.map(equipo => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.id} 
        colaboradores={colaboradores.filter ( colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
