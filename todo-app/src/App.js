import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import Tabs from './components/Tabs';

function App() {
    const [isFormOpen, setFormOpen] = useState(false);

    const handleOpenForm = () => {
        setFormOpen(true);
    };

    const handleCloseForm = () => {
        setFormOpen(false);
    };

    return (
        <div className="App">
            <h1>Todo Task Management</h1>
            <button onClick={handleOpenForm}>Add Task</button>

            {isFormOpen && <TaskForm onClose={handleCloseForm} />}

            <Tabs />
        </div>
    );
}

export default App;
