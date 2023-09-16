import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";

function OpenDatNewStackModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   NewStack
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Front-End Developer</h4>
                <p>lorem ipsum broski</p>
            </Modal.Body>
        </Modal>
    );
}

function OpenDatMerlinModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Merlin solutions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Full Stack Developer</h4>
                <p>lorem ipsum broski x2</p>
            </Modal.Body>
        </Modal>
    );
}

function Experience() {

    const [modalShow, setModalShow] = useState(false);
    const [merlinModal, setMerlinModal] = useState(false);

    return (
        <div className="exp-container">
            <h1 className="exp-header">Experience</h1>

            <div className="clickModal" onClick={() => setModalShow(true)}>
                <div className="flex-test">
                    <h2 className="newstack-header">Front-End Developer @ NewStack </h2>
                    <p className="newstack-date">April 2023 - October 2023</p>
                </div>
                <p className="details">Click for more details!</p>
            </div>
            
            <div className="merlinModal" onClick={() => setMerlinModal(true)}>
                <div className="merlin-flex">
                    <h2 className="merlin-header">Full Stack Developer @ Merlin Solutions</h2>
                    <p className="merlin-date">October 2022 - April 2023</p>
                </div>
                <p className="details">Click for more details!</p>
            </div>
            <OpenDatMerlinModal show={merlinModal} onHide={() => setMerlinModal(false)} className="custom-modal"/>
            <OpenDatNewStackModal show={modalShow} onHide={() => setModalShow(false)} className="custom-modal"/>
        </div>
    )
}

export default Experience