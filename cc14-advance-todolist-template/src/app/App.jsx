import './App.scss';
import { useState, useEffect } from 'react';
import * as TodoAPIServices from '../services/todoServices'
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { TodoContent } from '../components/Todo/TodoContent';
import { getSevenDayRange } from '../utils/DateUtils';

function App() {
    const [todos, setTodos] = useState([]);
    const [todosFilter, setTodoFilter] = useState([]);

    useEffect(() => {
        // FN-BODY(use Effect) : Run AFTER EVERY RENDER(MOUNT+RERENDER)
        async function fetchAllTodo() {
            try {
                // let response = await axios({
                //     method: 'get',
                //     url: 'http://localhost:8080/todos',
                // });

                // #1 : Sync with External Service
                const response =  await TodoAPIServices.getAllTodo()

                // #2 : Sync with Internal State
                setTodos(response.data.todos);
                setTodoFilter(response.data.todos);
            } catch (error) {

                // #3 Error handler
                console.log(error.response.status);
            }
        }
        fetchAllTodo();
        // FN-RETURN(CleanUp Effect) : Run BEFORE RERENDER,BEFORE UNMOUNT
        return () => console.log('Clean Up');
    }, []);

    const handleSelectGenericLists = (selectedIndex) => {
        const [today, nextSevenDay] = getSevenDayRange();

        // selected Index == 0 , เอาหมด set กลับเป็น todos ที่ fetch มา
        // selected Index == 1 , เอาของวันนี้เท่านั้น
        // selected Index == 2 , เอาของ 7 วันถัดไปเท่านั้น
        if (selectedIndex == 0) {
            setTodoFilter(todos);
        } else if (selectedIndex == 1) {
            const newTodo = todos.filter((todo) => todo.date === today);
            setTodoFilter(newTodo);
        } else if (selectedIndex == 2) {
            const newTodo = todos.filter((todo) => todo.date >= today && todo.date <= nextSevenDay);
            setTodoFilter(newTodo);
        }
    };

    const handleChangeSearch = (searchValue) => {
        // ใช้ todosFilter เพื่อหาจาก tab ปัจจุบัน
        const newTodo = todosFilter.filter((todo) => todo.task.includes(searchValue));
        setTodos(newTodo);
        setTodoFilter(newTodo);
    };
    return (
        <div className='container'>
            <Header onChangeSearch={handleChangeSearch} />
            <SideBar onSelect={handleSelectGenericLists} />
            <TodoContent />
        </div>
    )
}

export default App;
