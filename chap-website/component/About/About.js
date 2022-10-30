import styles from '../../styles/component/AboutUs/About.module.css';

const About = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <h1 className='text-center'> About Us </h1>
            <div className='container mt-5'>
                <div className='row mb-5 justify-content-center'>
                    <div className='text-center col-lg-4'>
                        <h3>
                           What is our Mission? 
                        </h3>
                        <div>
                            Our goal is to provide support for students who are just joining university
                        </div>
                    </div>
                </div>
                <div className='row gx-5'>
                    <div className='p-3 text-center col-lg-4'>
                        <h3>
                           What is our Mission? 
                        </h3>
                        <div>
                            Our goal is to provide support for students who are just joining university
                        </div>
                    </div>
                    <div className='p-3 text-center col-lg-4'>
                        <h3>
                           Why would you join us? 
                        </h3>
                        <div>
                            Our goal is to provide support for students who are just joining university
                        </div>
                    </div>
                    <div className='p-3 text-center col-lg-4'>
                        <h3>
                            How much experience do you need?  
                        </h3>
                        <div>
                            Our goal is to provide support for students who are just joining university
                        </div>
                    </div>
                </div>
                <div className='row gx-5 mt-5'>
                    <div className='p-3 text-center col-lg-6'>
                        <h3>
                           Why would you join us? 
                        </h3>
                        <div>
                            Our goal is to provide support for students who are just joining university
                        </div>
                    </div>
                    <div className='p-3 text-center col-lg-6'>
                        <h3>
                            How much experience do you need?  
                        </h3>
                        <div>
                            Our goal is to provide support for students who are just joining university
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mt-5 text-center'>Join the fun and become a great Engineer!</h2>
        </div>
    )
}


export default About;