
import { Container, Col } from 'react-bootstrap'

export default function Welcome() {
    return (
        <section className='background'>
            <Container className='pt-5'>

                <Col className='d-flex flex-column flex-md-row justify-content-center justify-content-md-between'>

                    <h1 className='dark_primary_text text-center' style={{ fontSize: "60px" }}>ΕΒΕΛΥΝ ΠΑΤΣΙΟΥΡΑ</h1>

                    <nav className='d-flex justify-content-center  d-md-flex'>
                        <ul className='d-flex gap-4 dark_primary_text p-0'>
                            <a href="#welcome">
                                <li className='scaleUp'>ΒΙΟΓΡΑΦΙΚΟ</li>
                            </a>
                            <a href="#services">
                                <li className='scaleUp'>ΥΠΗΡΕΣΙΕΣ</li>
                            </a>
                            <a href="#contact">
                                <li className='scaleUp'>ΕΠΙΚΟΙΝΩΝΙΑ</li>
                            </a>

                        </ul>
                    </nav>
                </Col>

                <Col className='text-center text-md-start mt-5 mt-md-0'>
                    <h2 className='dark_primary_text'>ΨΥΧΟΛΟΓΟΣ (BSc)</h2>
                    <h4 className='dark_primary_text m-0'>MA Συμβουλευτικής & Ψυχοθεραπείας</h4>
                    <h5 className='dark_primary_text m-0'>Γνωστική Συμπεριφορική Θεραπεία</h5>
                    <h5 className='dark_primary_text m-0'>Ψυχοθεραπεία Εφήβων - Ενηλίκων</h5>
                </Col>

                {/* <div className='arrowDown'>
                    <i className="bi bi-arrow-down"></i>
                </div> */}

            </Container>


        </section>
    )
}