import styles from './ScheduleSign.module.css'

export default function ScheduleSign() {
    return (
        <div className={styles.ScheduleSign}>
            <table>
                <tbody>
                <tr>
                    <td>ПН</td>
                    <td colSpan={2}>Выходной</td>
                </tr>
                <tr>
                    <td>ВТ</td>
                    <td colSpan={2}>Выходной</td>
                </tr>
                <tr>
                    <td>СР</td>
                    <td colSpan={2}>Выходной</td>
                </tr>
                <tr>
                    <td>ЧТ</td>
                    <td>10:00 - 20:00</td>
                    <td>Женский</td>
                </tr>
                <tr>
                    <td>ПТ</td>
                    <td>10:00 - 20:00</td>
                    <td>Мужской</td>
                </tr>
                <tr>
                    <td>СБ</td>
                    <td>10:00 - 20:00</td>
                    <td>Женский</td>
                </tr>
                <tr>
                    <td>ВС</td>
                    <td>10:00 - 20:00</td>
                    <td>Мужской</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}