import React from "react";

import "./presentation.scss";
import {imagenPreView} from "./presentation.js";

import part1 from "../../assets/static/part1.jpg"
import part2 from "../../assets/static/part2.jpg"
import part3 from "../../assets/static/part3.jpg"
import touch from "../../assets/static/touch.svg"
import monitoring from "../../assets/static/studio_monitoring.svg"
import cancellation from "../../assets/static/noise_cancellation.svg"


const Presentation = () => {

    const [Picture, setPicture] = React.useState({src: part1, name: "part1"})

    return(
        <div className="imagen">
            <div className="ima-show mb-2">
                <img src={Picture.src} alt=""/>
            </div>
            <div className="row-sm mb-3">
                <div className={Picture.name === "part1" ? "ima-prev-view  ima-select" : "ima-prev-view "} onClick={() => {imagenPreView("part1", part1, setPicture)}}>
                    <img src={part1} alt="part1"/>
                </div>
                <div className={Picture.name === "part2" ? "ima-prev-view  ima-select" : "ima-prev-view "} onClick={() => {imagenPreView("part2", part2, setPicture)}}>
                    <img src={part2} alt="part2"/>
                </div>
                <div className={Picture.name === "part3" ? "ima-prev-view  ima-select" : "ima-prev-view "} onClick={() => {imagenPreView("part3", part3, setPicture)}}>
                    <img src={part3} alt="part3"/>
                </div>
            </div>
            <div className="row-xs">
                <div className="caracter-icon">
                    <img src={touch} alt=""/>
                    <span className="">Customizable Touch Controls</span>
                </div>
                <div className="caracter-icon">
                    <img src={monitoring} alt=""/>
                    <span className="">Built-in Equalizer</span>
                </div>
                <div className="caracter-icon">
                    <img src={cancellation} alt=""/>
                    <span className="">Active Noise Cancellation</span>
                </div>
            </div>
        </div>
    )
}

export default Presentation;