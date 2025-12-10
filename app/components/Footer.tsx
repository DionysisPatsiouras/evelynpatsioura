import { Stack } from "react-bootstrap"

export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <footer >

            <Stack gap={4} className="d-flex flex-column align-items-center primary_bg py-5 text-center">

                <div>
                    <h1 className='white-text' style={{ fontSize: "45px", letterSpacing: '10px' }}>ΕΒΕΛΥΝ ΠΑΤΣΙΟΥΡΑ</h1>
                    <h4 className='white-text secondary-font' style={{fontSize: '30px'}}>ΨΥΧΟΛΟΓΟΣ (BSc)</h4>
                </div>

                <div>

                    <p className="white-text mb-3">COPYRIGHTS © {currentYear} | EVELYN PATSIOURA</p>
                    <p className="white-text">design & development: Dionysis Patsiouras</p>
                </div>
            </Stack>
        </footer>
    )
}