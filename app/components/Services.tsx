

import { Container, Stack } from 'react-bootstrap'

type ServiceType = {
    icon: string
    title: string
    body: string
}

export default function Services() {


    const services: ServiceType[] = [
        {
            icon: 'bi bi-person',
            title: "ΑΤΟΜΙΚΗ ΨΥΧΟΘΕΡΑΠΕΙΑ",
            body: "Η ατομική ψυχοθεραπεία απευθύνεται σε ανθρώπους που αντιμετωπίζουν ψυχολογικές δυσκολίες και καθημερινές προκλήσεις με αποτέλεσμα να επηρεάζεται σε σημαντικό βαθμό η λειτουργικότητά τους. Μέσα από τη δημιουργία ενός κλίματος ασφάλειας, εμπιστευτικότητας και αμέριστης αποδοχής ο θεραπευόμενος ενθαρρύνεται να διερευνήσει σκέψεις, συναισθήματα και συμπεριφορές που επηρεάζουν δυσμενώς την καθημερινότητα και την ψυχική ευεξία."
        },
        {
            icon: 'bi bi-headset',
            title: "ΟNLINE ΘΕΡΑΠΕΙΑ ΚΑΙ ΣΥΜΒΟΥΛΕΥΤΙΚΗ",
            body: "Οι διαδικτυακές συνεδρίες αποτελούν μία ασφαλή επιλογή για ανθρώπους που κατοικούν σε απομακρυσμένες περιοχές με περιορισμένη ή ελλιπή  πρόσβαση σε υπηρεσίες ψυχικής υγείας, για εκείνους που λόγω της καθημερινότητάς τους ή προβλημάτων υγείας δυσκολεύονται να μετακινηθούν με ασφάλεια ή για όλους εκείνους που επιθυμούν να πραγματοποιούν τις συνεδρίες από το δικό τους χώρο."
        },
        {
            icon: 'bi bi-lightbulb',
            title: "ΓΝΩΣΤΙΚΗ ΣΥΜΠΕΡΙΦΟΡΙΚΗ ΘΕΡΑΠΕΙΑ",
            body: "Η Γνωστική Συμπεριφορική Θεραπεία αποτελεί μία ολοκληρωμένη ψυχολογική θεραπεία η οποία έχει αξιολογηθεί εκτεταμένα για την αποτελεσματικότητά της σε ένα ευρύ φάσμα ψυχολογικών δυσκολιών. Το συγκεκριμένο μοντέλο προτείνει πως ο δυσλειτουργικός τρόπος σκέψης που επηρεάζει τη διάθεση και τη συμπεριφορά του ατόμου είναι κοινό στοιχείο σε όλες τις ψυχολογικές δυσκολίες."
        },
    ]

    const truncate = (text: string) => {

        const WORD_THRESHOLD = 150

        const truncatedText = text.length > WORD_THRESHOLD
            ? text.slice(0, WORD_THRESHOLD) + '...'
            : text

        return <div dangerouslySetInnerHTML={{ __html: truncatedText }} className='white-text' />


    }

    return (
        <section className="primary_bg py-5 px-3 px-md-5 fullheight" id="services">

            <Container>

                <Stack gap={5} className="d-flex flex-column justify-content-center align-items-center">

                    <h2 className='white-text secondary-font'>ΥΠΗΡΕΣΙΕΣ</h2>

                    <div className="d-flex flex-column justify-content-center flex-md-row gap-5 text-center white-text">
                        {services
                            .map(({ icon, title, body }: ServiceType) => (
                                <div key={`${title}-${body}`} className='col-12 col-md-3 d-flex flex-column  align-items-center'>

                                    <div className='serviceIcon'>
                                        <i className={icon} />
                                    </div>

                                    <h3 className='white-text serviceTitle' style={{ marginTop: "35px" }}>{title}</h3>

                                    {truncate(body)}

                                    <a href="/services" className='white-text mt-3 cursor-pointer'>Διαβάστε περισσότερα..</a>


                                </div>
                            ))}
                    </div>

                    <h4 className='white-text text-center'>
                        «Τα εμπόδια δεν μπλοκάρουν το μονοπάτι, είναι το μονοπάτι»
                    </h4>



                </Stack>
            </Container>

        </section>
    )
}