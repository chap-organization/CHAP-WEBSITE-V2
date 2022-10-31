import styles from "../../styles/component/Team/TeamCard.module.css";
import { useState } from "react";


export default function TeamCard({ info }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.image} onClick={() => setShowModal(!showModal)}>
                
            </div>
            <div className={`${styles.popup} ${(showModal ? styles.showPopup : "")}`}>
                <div className={styles.innerPopup}>
                <div className={styles.popupText}>
                    <p>{info.name}</p>
                    <p>{info.role}</p>
                    <p>{info.year} - {info.program}</p>
                    <a href={info.linkedin}><p>LinkedIn</p></a>
                    <button className={styles.exitPopup} onClick={() => setShowModal(!showModal)}>x</button>
                    <p className={styles.description}>{info.description}</p>
                </div>

                </div>
            </div>
            <div className={styles.text}>
                <p>{info.name}</p>
                <p>{info.role}</p>
                <p>{info.year} - {info.program}</p>
                <a target="_blank" href={info.linkedin}><p>LinkedIn</p></a>
                <a target="_blank" href={info.website}><p>Personal website</p></a>
            </div>
        </div>
    );

}