import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg'
import Equipo from './components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  // Ternario --> condicion ? seMuestra : noSeMuestra
  return (
    <div>
      <Header />
      {mostrarFormulario && <Form /> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Front End"/>
    </div>
  );
}

export default App;
