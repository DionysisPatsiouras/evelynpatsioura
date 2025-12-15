import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


type Props = {
    show: boolean
    handleClose: () => void
}

export default function TermsModal({ show, handleClose }: Props) {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>ΟΡΟΙ ΣΥΝΕΡΓΑΣΙΑΣ</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <p style={{ fontSize: '25px' }} className='dark_primary_text'>
                    Η διάρκεια της συνεδρίας είναι 60 λεπτά και η προβλεπόμενη συχνότητα είναι μία φορά την εβδομάδα
                    χωρίς αυτό να είναι περιοριστικό καθώς εξαρτάται από το εκάστοτε αίτημα.
                    <br></br>
                    <br></br>
                    Οι συνεδρίες πραγματοποιούνται σε συγκεκριμένη ημέρα και ώρα έπειτα από σχετική συννενόηση.
                    Σε περίπτωση ακύρωσης της συνεδρίας χρειάζεται να ενημερώσετε εγκαίρως (24 ώρες νωρίτερα)
                    διαφορετικά η συνεδρία θα χρεωθεί κανονικά.
                    <br></br>
                    <br></br>
                    Μη έγκαιρη προσέλευση στην ώρα της συνεδρίας συνεπάγεται λιγότερος θεραπευτικός χρόνος.

                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modalButton" onClick={handleClose}>
                    Το κατάλαβα
                </Button>

            </Modal.Footer>
        </Modal>
    )
}