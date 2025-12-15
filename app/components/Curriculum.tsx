'use client'

import { useState } from "react"

import Image from "next/image"


import { Container, Stack } from 'react-bootstrap'
import CvModal from "./CvModal"


import { CursorSVG } from "../svg/Cursor"

export default function Curriculum() {

    const [modal, setModal] = useState<boolean>(false)

    const handleModal = () => setModal(!modal)


    return (
        <section className="grey_bg py-5 px-3 px-md-5 fullheight" id="welcome">

            <CvModal show={modal} handleClose={() => setModal(false)} />

            <Container>

                <Stack gap={5} className="d-flex flex-column justify-content-center align-items-center">

                    <h2 className="dark_primary_text secondary-font">ΒΙΟΓΡΑΦΙΚΟ</h2>

                    <Image
                        className="avatar"
                        src={"/images/avatar.jpg"}
                        alt="avatar"
                        width={1200}
                        height={1200}
                    />

                    <p className="text-center dark_primary_text" style={{ fontSize: '26px' }}>
                        Ονομάζομαι <strong>Έβελυν Πατσιούρα</strong>, είμαι Ψυχολόγος και κάτοχος άδειας ασκήσεως επαγγέλματος (2572/17-06-2020).
                        <br></br>
                        Απέκτησα πτυχίο Ψυχολογίας από το <strong>University of East London</strong>.
                        Στα πλαίσια των προπτυχιακών μου σπουδών ολοκλήρωσα πρακτική άσκηση στην
                        <br></br><strong>Ελληνική Εταιρία Νόσου Alzheimer </strong>
                        όπου είχα την ευκαιρία να παρακολουθήσω και να συμμετάσχω σε προγράμματα μη φαρμακευτικών παρεμβάσεων
                        για την αντιμετώπιση ήπιων και μειζόνων νοητικών διαταραχών, σε υποστηρικτικά προγράμματα
                        για τους περιθάλποντες και στη χορήγηση νευροψυχολογικών δοκιμασιών για την άνοια.
                    </p>


                    <div onClick={handleModal}
                        style={{ cursor: 'pointer' }}
                        className="d-flex flex-column align-items-center scaleUp">
                        <h6 className="dark_primary_text">ΠΛΗΡΕΣ ΒΙΟΓΡΑΦΙΚΟ</h6>
                        <CursorSVG />
                    </div>

                </Stack>
            </Container>

        </section>
    )
}