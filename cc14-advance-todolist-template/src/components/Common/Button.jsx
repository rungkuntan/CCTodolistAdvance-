import styles from './Button.module.scss'

export  function Button({text, active = true}) {

  let btnStyles = active ? styles.btn__primary : styles.btn__secondary
  return (
	<button className={`${styles.btn} ${btnStyles}`}>{text}</button>
  )
}
