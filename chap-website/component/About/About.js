import styles from '../../styles/component/About/About.module.css';

const About = () => {
    return(
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.roundRec}`}></div>
            <div className={`${styles.textContainer}`}>
                <p><span>C</span>OMUNITY OF</p>
                <p><span>H</span>ACKERS</p>
                <p><span>A</span>ND</p>
                <p><span>P</span>ROGRAMMERS</p>
            </div>
        </div>
    )
}

export default About;