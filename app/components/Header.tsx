import { Container, Button } from "react-bootstrap"

export default function Header() {


    return (
        <header>

            <Container className='py-4 d-flex flex-column flex-lg-row justify-content-center justify-content-md-between '>

                <div className="text-center text-lg-start">
                    <h1 className='dark_primary_text text-center text-lg-start' style={{ fontSize: "60px" }}>ΕΒΕΛΥΝ ΠΑΤΣΙΟΥΡΑ</h1>
                    <h2 className='dark_primary_text secondary-font' style={{ fontSize: "32px" }}>ΨΥΧΟΛΟΓΟΣ (BSc)</h2>
                </div>

                <nav className='d-flex justify-content-center d-md-flex'>
                    <ul
                        style={{ height: 'fit-content' }}
                        className='d-flex m-0 gap-3 gap-lg-4 dark_primary_text p-0 flex-wrap justify-content-center align-items-center'>
                        <a href="/#welcome">
                            <li className='scaleUp'>ΒΙΟΓΡΑΦΙΚΟ</li>
                        </a>
                        <a href="/#services">
                            <li className='scaleUp'>ΥΠΗΡΕΣΙΕΣ</li>
                        </a>
                        <a href="/#contact">
                            <li className='scaleUp'>ΕΠΙΚΟΙΝΩΝΙΑ</li>
                        </a>


                        <Button
                            variant="success"
                            href="tel:+306979785768"
                            className="text-white"
                            style={{ height: 'fit-content' }}
                        >
                            <i className="bi bi-telephone me-2 white-text" />

                            <span className="white-text"> ΚΛΕΙΣΕ ΣΥΝΕΔΡΙΑ</span>

                        </Button>


                    </ul>
                </nav>


            </Container>

        </header>
    )
}