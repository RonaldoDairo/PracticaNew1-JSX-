import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task.list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx */}
        {/*<Greating name="Denni"></Greating>*/}
        {/*Componente de ejemplo funcional*/}
       ¨{/* <Greetingf name="Dairo"></Greetingf>*/}
        {/* Componente de Listado de Tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*Ejemplos de usos de HOOKS */}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        <Ejemplo4 nombre="Dai">
        {/**Todo lo que hay aqui, es tratado como props.children */}
          <h3>
            Contenido del children
          </h3>
        </Ejemplo4>
        
      </header>
    </div>
  );
}

export default App;
