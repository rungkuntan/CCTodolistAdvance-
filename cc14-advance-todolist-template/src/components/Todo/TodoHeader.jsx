import styles from './TodoHeader.module.scss';
import {HiOutlineSwitchVertical} from 'react-icons/hi'
import {Button} from '../Common/Button'

export function TodoHeader() {
    let today = new Date();
    let options = { weekday: 'short', day: 'numeric', month: 'short' };

    return (
        <div className={styles.header}>
            <div className={styles.header__status__bar}>
                <h1>Inbox</h1>
                <span>{today.toLocaleDateString('en-US', options)}</span>
            </div>

            <div className={styles.header__control__bar}>
                <Button text="status" />
                <Button text="date"  active={false}/>
                <Button text="task"  active={false} />
                <span className={styles.control__bar__icon}>
                    <HiOutlineSwitchVertical/>
                </span>
            </div>
        </div>
    );
}
