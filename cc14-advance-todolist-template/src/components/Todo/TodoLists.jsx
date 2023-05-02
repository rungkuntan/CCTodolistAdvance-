import styles from './TodoLists.module.scss'
import { TodoItem } from './TodoItem'
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

export  function TodoLists({}) {
	// const shareObj = useContext(TodoContext)
	// const todoFilter = sharedObj.todosFilter;

	const {todosFilter} = useContext(TodoContext);


  return (
	<ul className={styles.todoList}>
		{todosFilter?.map(item => (<TodoItem todo={item} key={item.id}/>))}
	</ul>
  )
}
