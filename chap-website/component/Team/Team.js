import styles from "../../styles/component/Team/Team.module.css";
import TeamCard from "./TeamCard";

export default function Team() {

    const memberInfo = {
        name: "Matthew Cabral",
        role: "Co-President",
        year: "U2",
        program: "Software Engineering",
        linkedin: "/",
        website: "https://matthew-cabral.com",
        description: "hey how are u, im a munin",
    }

    return(
        <section>
            <TeamCard info={memberInfo}/>
        </section>
    );
}