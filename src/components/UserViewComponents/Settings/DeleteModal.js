import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ show, handleClose, handleAccept }) {
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account with Pawster?</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAccept}>
            I'm Sure!
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default DeleteModal;