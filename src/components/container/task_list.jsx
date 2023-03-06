import React ,{useState,useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// importamos la hoja de estilos de task.css
import '../../styles/task.scss';   
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Default Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default Description2', false, LEVELS.URGENT);    
    const defaultTask3 = new Task('Example3', 'Default Description3', false, LEVELS.BLOKING);
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1 , defaultTask2 , defaultTask3 ]);
    const [loading,setLoading] = useState(true);
    
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList is going to unmount...');
        };
    }, [tasks]);
    
    
    
    const changeCompleted= (id)=>{
        console.log('TODO: Cambiar estado de una tarea')
    }
    
    return (
        <div>
            <div className='col-12'>
            <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                             Your Task:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position:"relative" , height:"400px"}}>
                            <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Descripcion</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task , index )=>{
                                            return (
                                                <TaskComponent 
                                                key={index} 
                                                task={task}>

                                                </TaskComponent>
                                                  )
                                    }
                                    )}
                                    
                                </tbody>
                            </table>
                    </div>
                    <TaskForm></TaskForm>
            </div>
               
            </div>
            {/*TODO: Aplicar un for/map para renderizar una lista  */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};




export default TaskListComponent;
