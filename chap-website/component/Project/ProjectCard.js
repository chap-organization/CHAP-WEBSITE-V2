
import styles from '../../styles/component/Project/ProjectCard.module.css';

const ProjectCard = ({title, description}) => {
    return (
        <div className={`${styles.wrapper}`}>
            <div className='row'>
                <div className={`col-sm-4 ${styles.imageWrapper}`}>
                    {/** TODO:// PLACE IMAGE PROP */}
                </div>
                <div className={`col-sm-6 ${styles.projectDescription}`}>
                    <h3 className={`${styles.projectTitle}`}>
                        {title}
                    </h3>
                    <p className={`${styles.projectText}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard;