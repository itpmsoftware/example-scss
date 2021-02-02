import "./footer.scss"
import { buy } from "./footer.js"

const Footer = (props) => {
    const {totalPrice, validate, setValidate} = props;
    return (
        <div className="footer-serempre">
            <div className="container-footer">
            <div className="col-data">
                <div className="card-serempre-info">
                    <p>Free Shipping</p>
                    <span>Get 2-day free shipping anywhere in North America.</span>
                </div>
                <div className="card-serempre-info">
                    <p>2 years warranty</p>
                    <span>If anything goes wrong in the first two years, we'll replace it for free.</span>
                </div>
            </div>
            <div className="card-total-serempre">
                <div className="card-serempre-info">
                    <h2>{"$" + totalPrice}</h2>
                    <span className="always-show">Need financing? Learn more</span>
                </div>
                <div>
                    <button className="buy-now"
                    disabled={validate.showModal}
                    onClick={() => buy(validate, setValidate)}>Buy now</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;