import styles from './ScheduleSign.module.css'

export default function ScheduleSign() {
    return (
        <div className={styles.ScheduleSign}>
            <div className={styles.Row}><span>Понедельник</span><span>выходной</span></div>
            <div className={styles.Row}><span>Вторник</span><span>выходной</span></div>
            <div className={styles.Row}><span>Среда</span><span>с 16:00 до 20-00</span></div>
            <div className={styles.Row}><span>Четверг</span><span>с 16:00 до 20-00</span></div>
            <div className={styles.Row}><span>Пятница</span><span>с 12:00 до 20-00</span></div>
            <div className={styles.Row}><span>Суббота</span><span>с 10:00 до 20-00</span></div>
            <div className={styles.Row}><span>Воскресенье</span><span>с 10:00 до 20-00</span></div>
        </div>
    )
}