import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/actions/taskActions';

const TaskForm = ({ task, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        timeSlot: '',
        type: 'weekly',
    });

    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title,
                date: task.date,
                timeSlot: task.timeSlot,
                type: task.type,
            });
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task) {
            dispatch(updateTask({ ...formData, id: task.id }));
        } else {
            dispatch(addTask({ ...formData, id: Date.now() }));
        }

        // Call the onClose function after saving the task
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{task ? 'Edit Task' : 'Create a New Task'}</h2>
            <div className="mb-4">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Task Title"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <input
                    type="time"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <button 
                type="submit" 
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
                Save Task
            </button>
        </form>
    );
};

export default TaskForm;
