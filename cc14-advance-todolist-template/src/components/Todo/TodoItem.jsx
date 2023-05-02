import styles from './TodoItem.module.scss';
import { TodoContext } from '../../contexts/TodoContext';
import { useState,useContext } from 'react';
import { TodoForm } from './TodoForm';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { convertDate } from '../../utils/DateUtils';


export function TodoItem({ todo}) {
    // Consume
    const sharedObj = useContext(TodoContext)
    const editTodo = sharedObj.editTodo;
    const deleteTodo = sharedObj.deleteTodo

    // state
    const [isEdit, setIsEdit] = useState(false);



    const handleClickEditIcon = () => setIsEdit(true);

   const handleClickCheckBox = () => {
    editTodo(todo.id, { ...todo,status  : !todo.status})
   }

   const handleClickDeleteBox = () => {
    deleteTodo(todo.id)
   }

    
    return (
        <>
            {!isEdit ? (
                <li className={styles.todo__item__container} >
                    <div className={styles.checkbox__container} onClick={handleClickCheckBox}>
                        <HiCheck className={`${todo.status ? styles.checkbox__icon__done : styles.checkbox__icon}`} />
                    </div>
                    <p className={`${todo.status && styles.done}`}>{todo.task}</p>
                    <span className={styles.date__text}>{todo.date && convertDate(todo.date)}</span>
                    <div className={styles.edit__icon} onClick={handleClickEditIcon}>
                        <HiPencil />
                    </div>

                    <div className={styles.delete__icon} onClick={handleClickDeleteBox}>
                        <HiTrash />
                    </div>
                </li>
            ) : (
                <TodoForm 
                textConfirm="Edit task"
                onSetShow={setIsEdit}
                oldTodo={todo} 
        
                />
            )}
        </>
    );
}
