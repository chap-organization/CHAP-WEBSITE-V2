import styles from '../../styles/component/Home_Team/HomeTeam.module.css';
import Chart from './Chart.js';


const HomeTeam = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <h1>Team</h1>            
            <div className={`${styles.teamText}`}>
                Aenean in leo neque. Nam et condimentum est. Ut tincidunt finibus convallis. Donec mattis sed odio eget commodo. Maecenas accumsan porttitor nibh, eget faucibus leo gravida tempor. Praesent pretium risus in dui vulputate semper. Aenean in leo neque. Nam et condimentum est. Ut tincidunt finibus convallis. Donec mattis sed odio eget commodo. Maecenas accumsan porttitor eget faucibus leo gravida tempor. 
            </div>
            <div className={`row ${styles.contentWrapper}`}>
                <div className={`col-md-6`}>
                    <div className={`${styles.chartWrapper}`}>
                        <Chart/>
                    </div>
                </div>
                <div className='mt-5 col-md-6'>
                    <h3>
                        Team Demographics
                    </h3>
                    <div><div className={`${styles.teamSquare}`} style={{backgroundColor : 'rgba(54, 162, 235, 1)'}}></div> Engineering</div>
                    <div><div className={`${styles.teamSquare}`} style={{backgroundColor : 'rgba(255, 206, 86, 1)'}}></div> Education</div>
                    <div><div className={`${styles.teamSquare}`} style={{backgroundColor : 'rgba(75, 192, 192, 1)'}}></div> Science</div>
                    <div><div className={`${styles.teamSquare}`} style={{backgroundColor : 'rgba(153, 102, 255, 1)'}}></div> Agricultural & Environmental Sciences</div>
                    <div><div className={`${styles.teamSquare}`} style={{backgroundColor : 'rgba(153, 102, 200, 1)'}}></div> Management</div>
                </div>
            </div>
        </div>
    )
}


export default HomeTeam;

