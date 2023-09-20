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
                <p>As a Front-End Developer at NewStack (on contract) from April 2023 to October 2023, my contributions have been instrumental in several key areas. Firstly, 
                    I successfully implemented a REST API service tailored to the specific needs of an inventory management system, aligning it closely with the client's requirements. 
                    Moreover, I took charge of designing and developing user-friendly web-based dashboards catering to the needs of consumers, merchants, and account managers. 
                    These dashboards offer a comprehensive view and control over accounts, funds, sales, and transaction histories.
                </p>
                <p> 
                    Additionally, I demonstrated my proficiency by constructing reusable user interface components, closely adhering to mock-up designs, and seamlessly integrating these 
                    components into the existing application. Collaborating closely with a business analyst and application architect, I played a pivotal role in shaping customer journeys 
                    and developing precise technical specifications grounded in business requirements.
                </p>
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
                <p>During my tenure in a startup as a Full Stack Developer at Merlin Solutions from October 2022 to April 2023, I achieved significant milestones.
                    Firstly, I streamlined the user registration process by a remarkable 70% through the seamless integration of SMS authentication. 
                    Additionally, I took the lead in managing a dedicated team of developers, overseeing various aspects of planning, implementation, testing, and deployment.
                    </p>
                    <p>
                     One of the standout accomplishments during this period was the creation of a mission-critical financial application, which empowered consumers to load and transfer
                      funds seamlessly, engage in peer-to-peer transactions, and make purchases at integrated points of sale within a closed-circuit ledger system. 
                      Furthermore, I spearheaded the development of a mobile digital wallet, touch-screen kiosk, and POS applications, coupled with a robust back-end service designed
                       to ensure the secure and safe handling of financial transactions.</p>
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