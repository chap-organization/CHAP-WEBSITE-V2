import styles from "../../styles/component/Media/Media.module.css";
import MediaStorage from "../../storage/MediaStorage";
import { useEffect, useState } from "react";

export default function Media(props) {
    const [media, setMedia] = useState(MediaStorage());

    useEffect(() => {
        const data = MediaStorage();
        let out = [];
        for (let i = 0; i < props.cutoff; i++) {
            out.push(data[i]);
        }
        setMedia(out);
    }, [props.cutoff]);

    return(
        <div>
            <div className="row g-4">
                {media.map(item => {
                    return(
                        <div key={item.id} className={`col-lg-${item.pattern}`}>
                            <div className={styles.tempMedia} style={{width: "100%", height: "250px"}}>
                                how are you
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
