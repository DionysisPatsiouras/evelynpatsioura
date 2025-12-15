'use client'

import { useState } from "react"

import { Container, Col } from "react-bootstrap"

import TermsModal from "./TermsModal"


export default function Footer() {

    const currentYear = new Date().getFullYear()

    const [modal, setModal] = useState<boolean>(false)

    const handleModal = () => setModal(!modal)

    return (
        <footer className="dark_bg">

            <TermsModal show={modal} handleClose={handleModal}/>

            <Container>

                <div className="d-flex flex-column flex-md-row align-items-start justify-content-center py-5 gap-3 gap-md-0">

                    <Col xs={12} md={4} className="text-center text-md-start white-text">

                        <h1 style={{ fontSize: "45px", letterSpacing: '10px' }}>ΕΒΕΛΥΝ ΠΑΤΣΙΟΥΡΑ</h1>

                        <h4 className='secondary-font' style={{ fontSize: '30px' }}>ΨΥΧΟΛΟΓΟΣ (BSc)</h4>

                        <p className="white-text mb-3">COPYRIGHTS © {currentYear} | EVELYN PATSIOURA</p>

                    </Col>

                    <Col xs={12} md={4} className="text-center text-md-end">

                        <p className="white-text" style={{cursor: "pointer"}} onClick={handleModal}>ΟΡΟΙ ΣΥΝΕΡΓΑΣΙΑΣ</p>

                        <p className="white-text m-0">

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