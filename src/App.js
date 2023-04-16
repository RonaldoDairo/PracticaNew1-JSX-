import logo from './logo.svg';
import './App.css';
import './App.js'
import Greating from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample'
import ObservableExample from './components/pure/ObservableExample';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio Greeting.jsx */}
        {/*<Greating name="Denni"></Greating>*/}
        {/*Componente de ejemplo funcional*/}
       ¨{/* <Greetingf name="Dairo"></Greetingf>*/}
        {/* Componente de Listado de Tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}
        {/*Ejemplos de usos de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
      {/*  <Ejemplo4 nombre="Dai">
       //Todo lo que hay aqui, es tratado como props.children 
          <h3>
            Contenido del children
          </h3>
        </Ejemplo4>*/}
        {/* <GreetingStyled name="Dairo"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestion de eventos */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender/> */}
      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      {/* Ejemplos de PROCESOS ASINCRONO */}
      {/* <AsyncExample/> */}
      <ObservableExample/>
      {/* Proyecto FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
