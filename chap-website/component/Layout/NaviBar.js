import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import logo from '../../public/assets/CHAP.png';
import styles from '../../styles/component/Layout/NaviBar.module.css';
import { Button, Container } from 'react-bootstrap';

const NaviBar = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className={`${styles.ourNavbar}`}>
            <Navbar.Brand>
                <Image
                    className={styles.logo}
                    src={logo}
                    width={317}
                    height={67}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-conntrol='navbarScroll' data-bs-target='navbarScroll'/>
            <Navbar.Collapse id="navbarScroll" className={`justify-content-end ${styles.navContent}`}>
                <Nav className={`${styles.navlinks}`}>
                    <Nav.Link href="/#About">About</Nav.Link>
                    <Nav.Link href="/#OurTeam">Our Team</Nav.Link>
                    <Nav.Link href="/#ProjectsAndAward">Projects & Awards</Nav.Link>
                </Nav>
                <Nav className={`${styles.joinUs}`}>
                    <Button className={styles.joinUsButton}>
                        Join Us
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NaviBar;