import "./modal.scss"

import Cart from "../../assets/static/shopping-cart.svg"

const Modal = (props) => {
    const {validate} = props;
    return (
        <div id="miModal" className={ validate.showModal ? "modal show": "modal"}>
            <div className="modal-contenido">
                <img src={Cart} alt=""/>
                <p>Item added to shopping cart.</p>
            </div> 
        </div>
    )
}

export default Modal;