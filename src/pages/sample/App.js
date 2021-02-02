import React from "react";

import "./App.scss";
import Footer from "../../components/footer/footer.jsx";
import Information from "../../components/information/information.jsx";
import Presentation from "../../components/presentation/presentation.jsx";
import Header from "../../components/header/header.jsx";
import Modal from "../../components/modal/modal.jsx";

function App() {
  const [totalPrice, setTotalPrice] = React.useState(0.0);
  const [validate, setValidate] = React.useState({
    color: "",
    showModal: false,
    isInvalid: false,
  });

  return (
    <div className="container">
      <Header />
      <hr />
      <div className="body-serempre">
        <div className="row">
          <div>
            <Presentation />
          </div>
          <Information
            setTotalPrice={setTotalPrice}
            validate={validate}
            setValidate={setValidate}
          />
        </div>
      </div>
      <Modal validate={validate} />
      <Footer
        totalPrice={totalPrice}
        validate={validate}
        setValidate={setValidate}
      />
    </div>
  );
}

export default App;
