import styles from './ScheduleSign.module.css'

export default function ScheduleSign() {
    return (
        <div className={styles.ScheduleSign}>
            <table>
                <tbody>
                <tr>
                    <td>ПН</td>
                    <td className={styles.DayOff} colSpan={2}>Выходной</td>
                </tr>
                <tr>
                    <td>ВТ</td>
                    <td className={styles.DayOff} colSpan={2}>Выходной</td>
                </tr>
                <tr>
                    <td>СР</td>
                    <td className={styles.DayOff} colSpan={2}>Выходной</td>
                </tr>
                <tr>
                    <td>ЧТ</td>
                    <td className={styles.WorkDay}>12:00 - 20:00</td>
                    <td className={styles.WorkDay}>Женский</td>
                </tr>
                <tr>
                    <td>ПТ</td>
                    <td className={styles.WorkDay}>12:00 - 20:00</td>
                    <td className={styles.WorkDay}>Мужской</td>
                </tr>
                <tr>
                    <td>СБ</td>
                    <td className={styles.WorkDay}>10:00 - 20:00</td>
                    <td className={styles.WorkDay}>Женский</td>
                </tr>
                <tr>
                    <td>ВС</td>
                    <td className={styles.WorkDay}>10:00 - 20:00</td>
                    <td className={styles.WorkDay}>Мужской</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}