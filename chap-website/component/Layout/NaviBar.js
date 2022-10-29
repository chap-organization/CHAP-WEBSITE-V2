

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../../styles/component/Layout/NaviBar.module.css'
import Image from 'next/image'

const NaviBar = () => {
    return (
        <Navbar className={`${styles.naviBar}`}>
            <Container>
            <Image/>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    )
}


export default NaviBar;