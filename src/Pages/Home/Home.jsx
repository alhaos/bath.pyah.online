import styles from './Home.module.css'
import ScheduleSign from "../ScheduleSign/ScheduleSign.jsx";

export default function Home() {
    return (
        <div className={styles.Home}>
            <h1 className={styles.Header}>Баня</h1>
            <h2 className={styles.Caption}>Режим работы:</h2>
            <ScheduleSign/>
        </div>
    )
}