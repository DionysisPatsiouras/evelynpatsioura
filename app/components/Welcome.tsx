
import { Container, Col } from 'react-bootstrap'

import Header from './Header'

export default function Welcome() {
    return (
        <section className='background'>

            <Header />

            <Container>

                <Col className='text-center text-lg-start mt-5 mt-lg-0'>
                    <h4 className='dark_primary_text m-0'>MA Συμβουλευτικής & Ψυχοθεραπείας</h4>
                    <h5 className='dark_primary_text m-0'>Γνωστική Συμπεριφορική Θεραπεία</h5>
                    <h5 className='dark_primary_text m-0'>Ψυχοθεραπεία Εφήβων - Ενηλίκων</h5>
                </Col>

            </Container>

        </section>
    )
}