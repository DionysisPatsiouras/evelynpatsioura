
import { Container, Col } from 'react-bootstrap'

export default function Welcome() {
    return (
        <section className='background'>
            <Container className='pt-5'>

                <Col className='d-flex flex-row justify-content-center justify-content-md-between'>

                    <h1 className='dark_primary_text text-center' style={{ fontSize: "60px" }}>ΕΒΕΛΥΝ ΠΑΤΣΙΟΥΡΑ</h1>

                    <nav className='d-none d-md-flex'>
                        <ul className='d-flex gap-4 dark_primary_text'>
                            <a href="#welcome">
                                <li>ΒΙΟΓΡΑΦΙΚΟ</li>
                            </a>
                            <a href="#services">
                                <li>ΥΠΗΡΕΣΙΕΣ</li>
                            </a>
                            <a href="#contact">
                                <li>ΕΠΙΚΟΙΝΩΝΙΑ</li>
                            </a>

                        </ul>
                    </nav>
                </Col>

                <Col className='text-center text-md-start'>
                    <h2 className='dark_primary_text'>ΨΥΧΟΛΟΓΟΣ (BSc)</h2>
                    <h4 className='dark_primary_text'>MA Συμβουλευτικής & Ψυχοθεραπείας</h4>
                    <h5 className='dark_primary_text'>Γνωστική Συμπεριφορική Θεραπεία</h5>
                    <h5 className='dark_primary_text'>Ψυχοθεραπεία Εφήβων - Ενηλίκων</h5>
                </Col>
            </Container>


        </section>
    )
}