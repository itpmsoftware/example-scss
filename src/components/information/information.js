const selectItem = (
    value,
    variable,
    description,
    setDescription,
    cost = 0.0
) => {
    switch (variable) {
        case "color":
            setDescription({...description, color: value });
            break;
        case "year":
            setDescription({...description, year: value, costYear: cost });
            break;
        case "features":
            setDescription({...description, features: value, costFeacture: cost });
            break;
        default:
            break;
    }
};

const selecTab = (e, id) => {
    const tabs = document.querySelectorAll(".tablinks");
    const contents = document.querySelectorAll(".tabcontent");
    for (let tab of tabs) {
        tab.className = "tablinks";
    }
    for (let content of contents) {
        if (id === content.id) {
            content.className = "tabcontent show";
        } else {
            content.className = "tabcontent";
        }
    }
    e.target.className = "tablinks selected";
};

export { selectItem, selecTab };