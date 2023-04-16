import React from 'react';
import { useParams } from 'react-router-dom';
const TaskDetailPage = ( { taskList } ) => {

const {id}= useParams();
const taskss = taskList.find(task => task.id === parseInt(id));
// ...rest of the component code


    return (
        <div>
            <h1>Task Details -- {id}</h1>
            <h2>{taskss.name}</h2>
            <h3>{taskss.description}</h3>
        </div>
    );
}

export default TaskDetailPage;
