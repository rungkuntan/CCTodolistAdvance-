import axios from './axiosConfig';

export const getAllTodo = async () => await axios.get('/todos');

export const createTodo = async (newTodoObj) => await axios.post('/todos', newTodoObj);

export const updateTodo = async (updateTodoObj) =>
    await axios.put(`/todos/${updateTodoObj.id}`, updateTodoObj);

export const deleteTodo = async (todoId) => await axios.delete(`todos/${todoId}`);

//Named Export
// export {getAllTodo:getAllTodo, createTodo, updateTodo:updateTodo,deleteTodo:deleteTo}
// const TodoAPIServices = {getAllTodo:getAllTodo, createTodo:createTodo, updateTodo:updateTodo,deleteTodo:deleteTo}