import Media from "./Media";
import styles from "../../styles/component/Media/MediaSection.module.css";

export default function MediaSection() {
    return(
        <section>
            <div className={`${styles.mediaSection}`}>
                <Media cutoff={9} />
                <p className={styles.explore}>Explore More Media <span>&#8594;</span></p>
            </div>
        </section>
    );
}