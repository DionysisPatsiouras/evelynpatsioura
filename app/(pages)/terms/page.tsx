import { Container, Col, Stack } from 'react-bootstrap'

import Header from "../../components/Header"

export default function Terms() {


    const terms = [
        { icon: "bi bi-clock", text: "Η διάρκεια της συνεδρίας είναι 60 λεπτά." },
        { icon: "bi bi-repeat", text: "H προβλεπόμενη συχνότητα είναι μία φορά την εβδομάδα χωρίς αυτό να είναι περιοριστικό καθώς εξαρτάται από το εκάστοτε αίτημα." },
        { icon: "bi bi-calendar", text: "Οι συνεδρίες πραγματοποιούνται σε συγκεκριμένη ημέρα και ώρα έπειτα από σχετική συννενόηση." },
        { icon: "bi bi-info-circle", text: "Μη έγκαιρη προσέλευση στην ώρα της συνεδρίας συνεπάγεται λιγότερος θεραπευτικός χρόνος." },
        { icon: "bi bi-x-square", text: "Σε περίπτωση ακύρωσης της συνεδρίας χρειάζεται να ενημερώσετε εγκαίρως (24 ώρες νωρίτερα) διαφορετικά η συνεδρία θα χρεωθεί κανονικά." }
    ]



    return (
        <main>

            <Header />

            <Col className='primary_bg white-text'>

                <Container className='py-5'>

                    <h2 className='white-text mb-4'>ΟΡΟΙ ΣΥΝΕΡΓΑΣΙΑΣ</h2>

                    <Stack gap={3}>
                        {terms.map(({ icon, text }: { icon: string, text: string }, idx: number) => (
                            <div key={idx}
                                className='d-flex gap-2'
                            >
                                <i className={`${icon} white-text`} style={{ fontSize: "20px" }} />
                                <h5 className='white-text m-0'>{text}</h5>
                            </div>
                        ))}

                    </Stack>


                    <h2 className='white-text mb-4 mt-5'>ΕΧΕΜΥΘΕΙΑ & ΑΠΟΡΡΗΤΟ</h2>

                    <h5 className='white-text'>
                        Όλες οι πληροφορίες που συζητούνται κατά τη διάρκεια των συνεδριών παραμένουν αυστηρά εμπιστευτικές, σύμφωνα με την ισχύουσα δεοντολογία και νομοθεσία, εκτός αν υπάρχει σοβαρός λόγος ασφάλειας.
                    </h5>

                </Container>

            </Col>
        </main>

    )
}