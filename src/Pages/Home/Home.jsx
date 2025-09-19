import styles from './Home.module.css'
import ScheduleSign from "../ScheduleSign/ScheduleSign.jsx";

export default function Home() {
    return (
        <div className={styles.Home}>
            <h1>Баня</h1>
            <h2>Режим работы:</h2>
            <ScheduleSign/>
        </div>
    )
}