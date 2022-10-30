import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import logo from '../../public/assets/CHAP.png';
import styles from '../../styles/component/Layout/NaviBar.module.css';
import { Button } from 'react-bootstrap';

import { useEffect, useState } from 'react';

const NaviBar = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal);
        return;
    }

    const handleSubmitClick = () => {
        console.log("submitting form")
        handleModalClick();
        return;
    }

    const MyNavBar = ({ buttonEnabled, navBarFix }) => {
        return (
            <Navbar fixed={navBarFix == 'fixed' ? 'top' : null} sticky={navBarFix == 'fixed' ? null : 'top'} collapseOnSelect expand="lg" className={`${styles.ourNavbar}`}>
                <Navbar.Brand>
                    <Image
                        alt="CHAP logo"
                        className={styles.logo}
                        src={logo}
                        width={317}
                        height={67}
                    />
                </Navbar.Brand>
                <Navbar.Toggle data-bs-target='navbarScroll' />
                <Navbar.Collapse id="navbarScroll" className={`justify-content-end ${styles.navContent}`}>
                    <Nav className={`${styles.navlinks}`}>

                        <Nav.Link style={{
                            pointerEvents: buttonEnabled
                        }} href="/#About">About</Nav.Link>

                        <Nav.Link style={{
                            pointerEvents: buttonEnabled
                        }} href="/#OurTeam">Our Team</Nav.Link>

                        <Nav.Link style={{
                            pointerEvents: buttonEnabled
                        }} href="/#ProjectsAndAward">Projects & Awards</Nav.Link>

                    </Nav>
                    <Nav className={`${styles.joinUs}`}>
                        <Button className={`${styles.joinUsButton}`} onClick={handleModalClick}>
                            Join Us
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    const JoinUsModal = () => {
        return (
            <div className={`${styles.modalWrapper}`}>
                <div className={`container ${styles.contentWrapper}`}>
                    <div className={`${styles.join} text-left`}>Join Us</div>
                    <select className="form-select" id="inputGroupSelect01">
                        <option defaultValue={true}>Please Select Inquiry Type</option>
                        <option value="1">Become a Member</option>
                        <option value="2">Become a Sponsor</option>
                        <option value="3">General Inquiry</option>
                    </select>
                    <div className={`mt-3 row gx-3`}>
                        <div className={`mt-1 col-lg-6`}>
                            <input type="text" className={`${styles.forminput} form-control`}  placeholder="Last Name" aria-describedby="addon-wrapping" />
                        </div>
                        <div className={`mt-1 col-lg-6`}>
                            <input type="text" className={`${styles.forminput} form-control`}  placeholder="First Name" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className={`mt-3 row gx-3`}>
                        <div className={`mt-1 col-lg-6`}>
                            <input type="text" className={`${styles.forminput} form-control`}  placeholder="Email" aria-describedby="addon-wrapping" />
                        </div>
                        <div className={`mt-1 col-lg-6`}>
                            <input type="text" className={`${styles.forminput} form-control`} placeholder="Phone" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <textarea className={`${styles.textContent} ${styles.forminput}  mt-5 form-control`} placeholder="We will answer as soon as possible! :)"></textarea>

                    <div className={`${styles.buttonWrapper} row mt-3 pb-3`}>
                        <div className={`d-flex justify-content-center mt-3 col-6`}>
                            <Button className={`${styles.cancelButton}`} onClick={handleModalClick}>
                               Cancel 
                            </Button>
                        </div>
                        <div className={`d-flex justify-content-center mt-3 col-6`}>
                            <Button className={`${styles.submitButton}`} onClick={handleSubmitClick}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return showModal ? (
        <div>
            <JoinUsModal/>
            <MyNavBar navBarFix='fixed' buttonEnabled={'none'} />
        </div>
    ) : (<MyNavBar navBarFix='sticky' buttonEnabled={'all'} />);

}

export default NaviBar;