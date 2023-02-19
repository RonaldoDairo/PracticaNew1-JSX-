import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)
    return (
        <div>
            <div>
               <h1> Your Task:</h1>
            </div>
            {/*TODO: Aplicar un for/map para renderizar una lista  */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
