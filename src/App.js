import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task.list';


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
        <TaskListComponent></TaskListComponent>
        
      </header>
    </div>
  );
}

export default App;
