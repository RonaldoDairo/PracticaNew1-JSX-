import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
const TaskForm = ({ add, lenght}) => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);
    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value ,  
        );
        add(newTask);
        
    }
    const normalStyle={
        color: 'blue',
        fontWeight: 'bold'
    }
    
    const urgentStyle ={
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blockingStyle ={
        color: 'tomato',
        fontWeight: 'bold'
    }
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                        <input ref={nameRef} id='inputName' type='text' className='form-control from-control-lg' required autoFocus placeholder='Task Name'/>
                        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control from-control-lg' required placeholder='Task Description'/>
                        <select className='form-control from-control-lg' ref={levelRef} defaultValue='LEVELS.NORMAL' id='selectLevel'>
                                <option style={normalStyle} value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option style={urgentStyle} value={LEVELS.URGENT}>
                                    Urgent
                                </option>
                                <option style={blockingStyle} value={LEVELS.BLOKING}>
                                    Blocking
                                </option>
                        </select>
                       <button type='submit' className='btn btn-success btn-lg ms-2'>{lenght > 0 ? 'Add New Task' : 'Create Your Task'}</button> 
                </div>
                
        </form>
    );
}
TaskForm.protoTypes ={
        add: PropTypes.func.isRequired,
        length: PropTypes.number.isRequired
}
export default TaskForm;
