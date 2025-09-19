import styles from './UnderConstruction.module.css'
import {Link} from "react-router-dom";

export default function UnderConstruction() {
    return (
        <div className={styles.UnderConstruction}>
            <h2>Under construction</h2>
            <Link to={"/home"}><p>Hello world</p></Link>
        </div>
    )
}