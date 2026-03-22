import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../service/StudentService.js";

class DeleteComponent extends Component{
    constructor() {
       super();

    }
    handleClose =()=>{
       this.props.closeModal();

    }
    handleDelete =()=>{
        deleteById(this.props.deleteStudent.id);
        this.props.closeModal();
    }

    render() {
        return(
            <>
                <Modal show={this.props.isShowModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Bạn có muốn xoá sinh viên : {this.props.deleteStudent.name}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default DeleteComponent ;