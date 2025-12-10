import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


type Props = {
    show: boolean
    handleClose: () => void
}

export default function CvModal({show, handleClose}: Props) {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>ΠΛΗΡΕΣ ΒΙΟΓΡΑΦΙΚΟ</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                [CV]
            </Modal.Body>
            <Modal.Footer>
                <Button className="modalButton" onClick={handleClose}>
                    Κλείσιμο
                </Button>
              
            </Modal.Footer>
        </Modal>
    )
}