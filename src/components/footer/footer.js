const buy = (validate, setValidate) => {
    if (validate.color === "") {
        setValidate({...validate, isInvalid: true });
        window.location.href = "#color-list";
    } else {
        setValidate({...validate, showModal: true, isInvalid: false });
        setTimeout(() => setValidate({...validate, showModal: false }), 2000);
    }
};

export { buy };