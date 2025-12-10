

import { Container, Stack } from 'react-bootstrap'

export default function Services() {


    const services = [
        { title: "ΥΠΗΡΕΣΙΑ 1", body: "Maecenas vulputate lectus sed velit fermentum, convallis feugiat augue vehicula. Fusce gravida erat quis feugiat mattis." },
        { title: "ΥΠΗΡΕΣΙΑ 2", body: "Maecenas vulputate lectus sed velit fermentum, convallis feugiat augue vehicula. Fusce gravida erat quis feugiat mattis." },
        { title: "ΥΠΗΡΕΣΙΑ 3", body: "Maecenas vulputate lectus sed velit fermentum, convallis feugiat augue vehicula. Fusce gravida erat quis feugiat mattis." },
    ]

    return (
        <section className="primary_bg py-5 px-3 px-md-5  fullheight" id="services">

            <Container>

                <Stack gap={5} className="d-flex flex-column justify-content-center align-items-center">

                    <h2 className='white-text secondary-font'>ΥΠΗΡΕΣΙΕΣ</h2>

                    <div className="d-flex flex-column flex-md-row gap-5 text-center white-text">
                        {services
                            .map(({ title, body }: { title: string, body: string }) => (
                                <div key={`${title}-${body}`}>
                                    <h3 className='white-text'>{title}</h3>
                                    <p className='white-text' style={{ fontSize: "20px" }}>{body}</p>
                                </div>
                            ))}
                    </div>

                    <h4 className='white-text'>
                        «Μικρά βήματα — μεγάλες αλλαγές.»
                    </h4>

                </Stack>
            </Container>

        </section>
    )
}