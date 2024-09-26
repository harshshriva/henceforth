export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todos');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todos', serializedState);
    } catch (e) {
      console.error('Error saving state', e);
    }
  };
  