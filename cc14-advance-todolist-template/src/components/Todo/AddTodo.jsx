import { useState } from 'react';
import styles from './AddTodo.module.scss';
import { TodoForm } from './TodoForm';
export function AddTodo() {
    const [isAddMode, setIsAddMode] = useState(false);

    const handleClickAdd = () => setIsAddMode(true);

    return (
        <div className={styles.container}>
            {!isAddMode ? (
                <div className={styles.add__todo} onClick={handleClickAdd}>
                    <span>+</span>
                    <h3>Add task</h3>
                </div>
            ) : (
                <TodoForm textConfirm='Add task' onSetShow={setIsAddMode}  />
            )}
        </div>
    );
}

// MODAL
// <div className='modal-container'>
//     <div className='modal'>
//         <h2></h2>
//         <input type='text' />
//         <div className='button-container'>
//             <button className='confirm-button'>Confirm</button>
//             <button className='cancel-button'>Cancel</button>
//         </div>
//     </div>
// </div>
