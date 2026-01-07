// 'use client'


import { Container, Col } from "react-bootstrap"


export default function Footer() {

    const currentYear = new Date().getFullYear()


    return (
        <footer className="dark_bg">

            <Container>

                <div className="d-flex flex-column flex-md-row align-items-start justify-content-xl-center justify-content-between py-5 gap-3 gap-md-0">

                    <Col xs={12} md={4} className="text-center text-md-start white-text">

                        <h1 style={{ fontSize: "45px", letterSpacing: '10px' }}>ΕΒΕΛΥΝ ΠΑΤΣΙΟΥΡΑ</h1>

                        <h4 className='secondary-font' style={{ fontSize: '30px' }}>ΨΥΧΟΛΟΓΟΣ (BSc)</h4>

                        <p className="white-text mb-3">COPYRIGHTS © {currentYear} | EVELYN PATSIOURA</p>

                    </Col>

                    <Col xs={12} md={4} className="text-center text-md-end">

                        <ul>
                            <li>
                                <a href="/terms" className="white-text" style={{ cursor: "pointer" }}>
                                    ΟΡΟΙ ΣΥΝΕΡΓΑΣΙΑΣ
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="white-text" style={{ cursor: "pointer" }}>
                                    ΥΠΗΡΕΣΙΕΣ
                                </a>
                            </li>
                        </ul>



                        <p className="white-text mt-3">

                            <a href="https://www.linkedin.com/in/dionysisp/" target="_blank">
                                design & development: Dionysis Patsiouras
                            </a>

                        </p>

                    </Col>

                </div>

            </Container>

        </footer>
    )
}