import react, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Aux from '../../../hoc/Aux';
import Burger from '../../Burger/Burger';

const OrderSummaryModal = (props) => {
    // let [show, setShow] = useState(false);
    let show = props.showModal;

    const handleClose = () => (show = true);
    // const handleShow = () => setShow(true);
    
    console.log(props);

    return (
        <Aux>
            <Modal show={show} onHide={props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Burger Sumary</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <Burger ingredients={props.ingredients}/>
                    <h3>Ohooo!! Your burger is ready </h3>
                    <h3>Price: {props.totalPrice}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={props.hideModal}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={props.hideModal}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </Aux>
    );
};

export default OrderSummaryModal;