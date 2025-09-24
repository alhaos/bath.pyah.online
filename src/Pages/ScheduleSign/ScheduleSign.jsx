import styles from './ScheduleSign.module.css'

export default function ScheduleSign() {
    return (
        <div className={styles.ScheduleSign}>
            <table>
                <p>24.09.2025 с 16.00 до 19.00 (мужской день)</p>
                <p>25.09.2025 с 12.00 до 20-00 (мужской и женский день)</p>
                <p>26.09.2025 с 12:00 до 20-00 (мужской и женский день)</p>
                <p>27.09.2025 с 10:00 до 20-00 (мужской и женский день)</p>
                <p>28.09.2025 с 10:00 до 20-00 (мужской и женский день)</p>
            </table>
        </div>
    )
}