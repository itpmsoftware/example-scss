import React from "react";
import axios from 'axios';

import "./information.scss";
import {selectItem, selecTab} from "./information.js";

const Information = (props) => {
    const [description, setDescription] = React.useState({color: "", year: "year2",
        costYear: 0.0, features: "voice", costFeacture: 0.0})
    const {setTotalPrice, validate, setValidate} = props;
    const [data, setData] = React.useState({})
    React.useEffect(() => {
        setTotalPrice(data.price + description.costYear + description.costFeacture);
        setValidate({...validate, color: description.color});
    }, [description])

    React.useEffect(() => {
        axios.get("data.json").then(res => {
            setTotalPrice(res.data.data.price + description.costYear + description.costFeacture);
            setData(res.data.data)
        })
    }, [])

    return(
        <div className="list">
            <div className="title-list mb-5">
                {data.new ? <span>New release</span> : ""}
                <h3>{data.title}</h3>
                <h5>{data.subtitle}</h5>
            </div>
            <div className="price-list  mb-5">
                <span>Starting at</span>
                <h3>{"$" + data.price}</h3>
            </div>
            <div className="mb-5">
                <button className="tablinks selected" data-link="Overview" onClick={(e) => selecTab(e, "Overview")}>Overview</button>
                <button className="tablinks" data-link="Features" onClick={(e) => selecTab(e, "Features")}>Features</button>
                <button className="tablinks" data-link="Box" onClick={(e) => selecTab(e, "Box")}>What's in the box?</button>

                <div id="Overview" className="tabcontent show">
                    <p>{data.overview}</p>
                </div>

                <div id="Features" className="tabcontent">
                    <p>{data.feacturesText}</p> 
                </div>

                <div id="Box" className="tabcontent">
                    <ul>
                        {
                            data.box ?
                            data.box.map((data, index) => (
                                <li key={index}>
                                    {data}
                                </li>
                            ))
                            : ""
                        }
                    </ul>
                </div>
            </div>
            <div className="mb-5" id="color-list">
                <h6>Choose your finish.</h6>
                <div className="row">
                    {data.color ?
                        data.color.map((data, index) => (
                            <div key={index} tabIndex={index}
                            className={description.color === data.name ? "card-serempre border col-50 mr-2 active" : "card-serempre border col-50 mr-2"}
                            onClick={() => selectItem(data.name, "color", description, setDescription)}>
                                <div>
                                    <p>{data.name}</p>
                                    <span>{data.description}</span>
                                </div>
                            </div>
                        ))
                    : ""}
                </div>
                <span className={validate.isInvalid ? "is-invalid" : "hidden"}>Choose an option</span>
            </div>
            <div className="mb-5">
                <h6>Would you like to add extended warranty coverage?.</h6>
                {data.warranty ?
                data.warranty.map((data, index) => (
                    <div key={index} tabIndex={index}
                    className={description.year === data.key ? "card-serempre border mb-2 active" : "card-serempre border mb-2"}
                    onClick={() => selectItem(data.key, "year", description, setDescription, data.cost)}>
                        <div className="w-75">
                            <p>{data.year}</p>
                            <span>{data.description}</span>
                        </div>
                        {data.cost !== 0 ?
                            <span className="extra-price">+ ${data.cost}</span>
                        : ""}
                    </div>
                )) 
                : ""}
            </div>
            <div className="mb-5">
                <h6>Features.</h6>
                {data.features ?
                data.features.map((data, index) => (
                    <div key={index} tabIndex={index}
                    className={description.features === data.key  ? "card-serempre border mb-2 active" : "card-serempre border mb-2"}
                    onClick={() => selectItem(data.key, "features", description, setDescription, data.cost)}>
                        <div className="w-75">
                            <p>{data.name}</p>
                        </div>
                        {data.cost !== 0 ?
                        <span className="extra-price">+ ${data.cost}</span>
                        : ""}
                    </div>
                )) 
                : "" }
            </div>
            <div className="specifications-list mb-5">
                <h6>Specifications.</h6>
                <ul>
                {data.specifications ?
                data.specifications.map((data, index) => (
                    <li key={index}>
                        <p>{data.name}</p>
                        <span>{data.value}</span>
                    </li>
                ))
                : ""}
                </ul>
            </div>
        </div>
    )
}

export default Information;