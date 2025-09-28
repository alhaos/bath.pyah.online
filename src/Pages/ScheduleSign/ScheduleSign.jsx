import styles from './ScheduleSign.module.css'

export default function ScheduleSign() {
    return (
        <div className={styles.ScheduleSign}>
            <span>Понедельник</span><span className={styles.Data}>выходной</span>
            <span>Вторник</span><span className={styles.Data}>выходной</span>
            <span>Среда</span><span className={styles.Data}>с 16:00 до 20-00</span>
            <span>Четверг</span><span className={styles.Data}>с 16:00 до 20-00</span>
            <span>Пятница</span><span className={styles.Data}>с 12:00 до 20-00</span>
            <span>Суббота</span><span className={styles.Data}>с 10:00 до 20-00</span>
            <span>Воскресенье</span><span className={styles.Data}>с 10:00 до 20-00</span>
        </div>
    )
}