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
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList is going to unmount...');
        };
    }, [tasks]);    
   function completeTask(task) {
            console.log('Complete this Task:', task);
            const index = tasks.indexOf(task);
            const tempTasks =[...tasks];
            tempTasks[index].completed = !tempTasks[index].completed;
      // we update the state of the component and it will update the
            // Iteration of the tasks in order to show the task updated 
            setTasks(tempTasks);
       }  
       function deleteTask(task) {
            console.log('Delete this Task:', task);
            const index = tasks.indexOf(task);
            const tempTasks =[...tasks];
            tempTasks.splice(index,1);
            setTasks(tempTasks);
       }
       function addTask(task) {
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks =[...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
       }
       function Table() {
        return(
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
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                            >
                                            
                                            </TaskComponent>
                                            )
                                }
                                )}
                        </tbody>
                    </table>)
       }
       

       let tasksTable;
       if(tasks.length > 0){
        tasksTable = <Table></Table>
       }else{
        tasksTable= (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>)
       }
       const loadingStyle ={
            color: 'grey',
            fontSize: '30px',
            fontWeight: 'bold'
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
                            {/* TODO: add Loading Spinner */}
                            {loading ? <p style={loadingStyle}>Loading...</p>  :tasksTable}
                    </div>
                    
            </div>
               
            </div>
            <TaskForm add={addTask} lenght={tasks.length}></TaskForm>
        </div>
    );
};




export default TaskListComponent;
