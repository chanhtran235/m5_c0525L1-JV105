import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../service/StudentService.js";

function Delete({isShowModal, deleteStudent, closeModal, setIsLoading}) {
    const handleClose = () => {
        closeModal(false);
    }
    const handleDelete = () => {
        deleteById(deleteStudent.id);
        console.log(getAll());
        closeModal(false);
        setIsLoading(pre => !pre);
    }
    return (
        <>
            <Modal show={isShowModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bạn có muốn xoá sinh viên : {deleteStudent.name}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete;