import { useState, useEffect, createContext } from 'react';
import * as TodoAPIServices from '../services/todoServices';
// Create Context => Context Object (NAME)  ใช้ได้ 2 ที่
// #1 Provider : Wrapper Component => Shared Data,Logic ได้
// #2 Consumer : Component ที่ต้องการใช้ Data,Logic (Subscribe Component)
export const TodoContext = createContext();

// สร้าง Provider : Wrapper Component
function TodoContextProvider(props) {
    const [todos, setTodos] = useState([]);
    const [todosFilter, setTodosFilter] = useState([]);

    async function fetchAllTodo() {
        try {
            // #1 : Sync with External Service
            const response = await TodoAPIServices.getAllTodo();

            // #2 : Sync with Internal State
            setTodos(response.data.todos);
            setTodosFilter(response.data.todos);
        } catch (error) {
            // #3 Error handler
            console.log(error.response.status);
        }
    }

    useEffect(() => {
        fetchAllTodo();
    }, []);

    const addTodo = async (task) => {
        try {
            // #1 Sync With External State/Service : Database
            const now = new Date().toISOString().slice(0, 10);
            const newTodoObj = { task: task, status: false, date: now };
            const response = await TodoAPIServices.createTodo(newTodoObj);
            const createdTodoObj = response.data.todo;

            // #2 Sync with Internal State : UI State
            const newTodoLists = [createdTodoObj, ...todos];
            // NOTE : not concern about time yet! todo for today can appear in next 7 days lists
            setTodos(newTodoLists);
            setTodosFilter(newTodoLists);
        } catch (error) {
            // #3 Error Handler eg. modal Error, Sweat Alert
            console.log(error.response.data);
        }
    };

    const editTodo = async (todoId, updateObj) => {
        // #1 Sync With External State/Service : Database
        // #2 Sync with Internal State : UI State
        // #3 Error Handler eg. modal Error, Sweat Alert

        try {
            // #1 Sync With External State/Service : Database
            // const response = await axios.put(`http://localhost:8080/todos/${todoId}`, updateObj);
            const response = await TodoAPIServices.updateTodo(updateObj)
            const updatedTodoObj = response.data.todo;

            // #2  Sync with Internal State : UI State
            const foundedIndex = todos.findIndex((todo) => todo.id === todoId);
            if (foundedIndex !== -1) {
                const newTodoLists = [...todos];
                newTodoLists[foundedIndex] = { ...newTodoLists[foundedIndex], ...updatedTodoObj };
                setTodos(newTodoLists);
                setTodosFilter(newTodoLists);
            }
        } catch (error) {
            // #3 Error Handler eg. modal Error, Sweat Alert
            console.log(error.response.data);
        }
    };

    const deleteTodo = async (todoId) => {
        // #1 Sync With External State/Service : Database
        // #2 Sync with Internal State : UI State
        // #3 Error Handler eg. modal Error, Sweat Alert
        try {
            // #1 Sync With External State/Service : Database
            // await axios.delete(`http://localhost:8080/todos/${todoId}`)
            await TodoAPIServices.deleteTodo(todoId)

            // #2 Sync with Internal State : UI State
            const newTodoLists = todos.filter((todo) => todo.id !== todoId);
            setTodos(newTodoLists);
            setTodosFilter(newTodoLists)
        } catch (error) {
            // #3 Error Handler eg. modal Error, Sweat Alert
            console.log(error.response.data);
        }
    };





    const sharedObj = { magic: 42, todos: todos, todosFilter: todosFilter, addTodo: addTodo,editTodo:editTodo,deleteTodo: deleteTodo };
    return <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>;
}

export default TodoContextProvider;
