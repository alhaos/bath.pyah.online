import styles from './Home.module.css'
import ScheduleSign from "../ScheduleSign/ScheduleSign.jsx";

export default function Home() {
    return (
        <div className={styles.Home}>
            <h1 className={styles.Header}>БАНЯ</h1>
            <h3 className={styles.Caption}>РЕЖИМ РАБОТЫ</h3>
            <ScheduleSign/>
            <div className={styles.Info}>
                <div className={styles.PhoneHeader}>Телефоны:</div>
                <div className={styles.Phone}>
                    <div>Баня</div>
                    <div>46-85-11</div>
                </div>
                <div className={styles.Phone}>
                    <div>Прачка</div>
                    <div>46-26-88</div>
                </div>
                <div className={styles.InfoUpdate}>
                    <div>Информация обновлена</div>
                    <div>24 сентября 2025</div>
                </div>
            </div>
        </div>
    )
}