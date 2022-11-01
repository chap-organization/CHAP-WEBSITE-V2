import styles from "../../styles/component/Team/Team.module.css";
import TeamCard from "./TeamCard";
import TeamStorage from "../../storage/TeamStorage";
import { useEffect, useState } from "react";

export default function Team() {

    const [memberInfo, setMemberInfo] = useState(TeamStorage());

    return(
        <section className={styles.teamSection}>
            <h3 className={styles.title}>Meet the Team!</h3>
            <div className="row g-3 ">
                {memberInfo.map(info => {
                    return(
                        <div key={info.id} className={`col-md-3 col-sm-6 centerItem ${(info.id == 3 ? styles.oddCard : "")}`}>
                            {(info.id != 3) &&  <TeamCard info={info}/>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}