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

                    {/* <Image
                        className="avatar"
                        src={"/images/avatar.jpg"}
                        alt="avatar"
                        width={1200}
                        height={1200}
                    /> */}

                    <p className="text-center dark_primary_text" style={{ fontSize: '26px' }}>
                        Είμαι ψυχολόγος με σεβασμό και ζεστασιά προς κάθε άνθρωπο που με εμπιστεύεται·
                        στηρίζομαι σε επιστημονικά τεκμηριωμένες μεθόδους και εξατομικευμένη προσέγγιση,
                        ώστε να κατανοήσουμε μαζί τις προκλήσεις σας και να χτίσουμε πρακτικές στρατηγικές για καλύτερη
                        ποιότητα ζωής. Εργάζομαι με ενσυναίσθηση, εχεμύθεια και σαφή στόχο την ενδυνάμωση
                        των πόρων σας — είτε πρόκειται για διαχείριση άγχους και στρες, σχέσεων ή αλλαγών ζωής.
                    </p>


                    {/* <div onClick={handleModal} style={{ cursor: 'pointer' }} className="d-flex flex-column align-items-center">
                        <h6 className="dark_primary_text">ΠΛΗΡΕΣ ΒΙΟΓΡΑΦΙΚΟ</h6>
                        <CursorSVG />
                    </div> */}

                </Stack>
            </Container>

        </section>
    )
}