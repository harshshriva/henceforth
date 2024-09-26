const initialState = {
    tasks: [],
    completedTasks: [],
    deletedTasks: []
};

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload.id ? action.payload : task
                )
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
                deletedTasks: [...state.deletedTasks, action.payload]
            };
        case 'COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
                completedTasks: [...state.completedTasks, action.payload]
            };
        default:
            return state;
    }
};

export default taskReducer;
