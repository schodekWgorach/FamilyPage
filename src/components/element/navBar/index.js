import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark " variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home ">
                        Rodzina Schodnickich
                    </Navbar.Brand>
                    <Nav className="me-auto text-secondary">
                        <Nav.Link href="#history">Historia</Nav.Link>
                        <Nav.Link href="#ancestyry">Przodkowie</Nav.Link>
                        <Nav.Link href="#contact">Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;