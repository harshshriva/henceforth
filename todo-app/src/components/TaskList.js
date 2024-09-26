import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ filter }) => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const filteredTasks = tasks.filter((task) => 
        filter === 'all' || task.type === filter
    );

    return (
        <div>
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
