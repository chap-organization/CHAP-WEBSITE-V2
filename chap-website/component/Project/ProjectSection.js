
import { useState, useEffect} from 'react'
import ProjectStorage from '../../storage/ProjectStorage.js'
import ProjectCard from './ProjectCard.js'
import styles from '../../styles/component/Project/ProjectSection.module.css'

const ProjectSection = ({cutoff, projectPage}) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const projectsStorage = ProjectStorage();
        let out = []
        let length = cutoff == null ? projectsStorage.length : cutoff;
        for(let i = 0; i < length; i++) {
            out.push(projectsStorage[i]);
        }
        setProjects(out);
    }, [])

    return (
        <div className={
                projectPage ?
                `${styles.sectionWrapperProject}` :
                `${styles.sectionWrapperMain}`
        }>
            <h3 className={`${styles.projectHeader}`}> Projects</h3>
            <p className={`${styles.projectDesc}`}> Aenean in leo neque. Nam et condimentum est. Ut tincidunt finibus convallis. Donec mattis sed odio eget commodo. Maecenas accumsan porttitor nibh, eget faucibus leo gravida.</p>
            <div className={`${styles.projectsWrapper}`}>
                {
                    projects.map(project => {
                        return (
                            <ProjectCard
                                key={project.id}
                                title={project.projectTitle}
                                description={project.projectDescription}
                            />                        
                        )
                    })
                }
            </div>
            {
                !projectPage ? 
                <p className={`${styles.seeMore}`}> <a href='/projects'>Visit our Projects Page!</a> </p> : 
                null
            }
        </div>
    )
}


export default ProjectSection;