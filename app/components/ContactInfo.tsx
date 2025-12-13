import { Container, Stack } from 'react-bootstrap'

export default function ContactInfo() {

    const Item = ({ icon, label, value, action }: { icon: string, label: string, value: string, action: string }) => (

        <div className='col-12 col-md-3 d-flex flex-column align-items-center gap-2 ellipse'>

            <div className='contact_circle'>
                <i className={icon} />
            </div>

            <h6 className='m-0 text-center'>{label}</h6>
            <h5 className='m-0 dark_primary_text text-center'>
                <a href={action} className='h5'>
                    {value}
                </a>
            </h5>

        </div>
    )

    return (

        <section className="grey_bg py-5 px-3 px-md-5" id="services">

            <Container>

                <Stack gap={5} direction="horizontal" className='flex-column flex-md-row justify-content-center'>

                    <Item
                        icon="bi bi-envelope-at"
                        label="Ηλ. διεύθυνση"
                        value="evelynpatsioura@gmail.com"
                        action="mailto:evelynpatsioura@gmail.com"
                    />

                    <Item
                        icon="bi bi-telephone"
                        label="Τηλέφωνο"
                        value="6979785768"
                        action="tel:6979785768"
                    />

                </Stack>

            </Container>

        </section>

    )
}