
'use client'
import { Container, Stack, Button, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

export default function Contact() {


    return (
        <section className="p-5 fullheight" id="contact">

            <Container>

                <Stack gap={5} className="d-flex flex-column justify-content-center align-items-center">

                    <h2 className="dark_primary_text secondary-font">ΕΠΙΚΟΙΝΩΝΙΑ</h2>



                    <p className="text-center dark_primary_text" style={{ fontSize: '26px' }}>
                        Είμαι στη διάθεσή σας για διευκρινίσεις ή κλείσιμο ραντεβού. Συμπληρώστε τη φόρμα και θα επικοινωνήσω το συντομότερο
                    </p>

                    <Col xs={12} md={4}>



                        <Form>
                            <Stack gap={3}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Το email σας</Form.Label>
                                    <Form.Control type="email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Το μήνυμά σας</Form.Label>
                                    <Form.Control as="textarea" rows={3} style={{ resize: 'none' }} />
                                </Form.Group>

                                <Button type="submit" className='w-100 modalButton'>
                                    Αποστολή μηνύματος
                                </Button>

                                <h6 className='text-center'>Όλα τα μηνύματα παραμένουν αυστηρά εμπιστευτικά</h6>

                            </Stack>
                        </Form>

                    </Col>



                </Stack>
            </Container>

        </section>
    )
}