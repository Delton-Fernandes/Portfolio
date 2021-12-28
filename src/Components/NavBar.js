import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

function TopNavBar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about_me">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#work_experience">
                            Work Experience
                        </Nav.Link>
                        <Nav.Link href="#contact_me">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavBar;
