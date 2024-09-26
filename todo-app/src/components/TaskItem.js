import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../redux/actions/taskActions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.date} - {task.timeSlot}</p>
            <p>Type: {task.type}</p>
            <button onClick={() => dispatch(completeTask(task.id))}>Complete</button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    );
};

export default TaskItem;
