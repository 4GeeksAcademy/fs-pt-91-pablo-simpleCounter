import PropTypes from "prop-types";
import React from "react";

export const SecondsCounter = (props) => {

    const timeString = props.time.toString().split("").reverse();

    return (
        <div className="row mt-5">
            <div className="d-flex justify-content-center">
                <div className="bg-dark text-white fs-1 p-3"><i className="fa-regular fa-clock"></i></div>
                <div className="bg-dark text-white fs-1 p-3">{timeString[3] !== undefined ? timeString[3] : "0"}</div>
                <div className="bg-dark text-white fs-1 p-3">{timeString[2] !== undefined ? timeString[2] : "0"}</div>
                <div className="bg-dark text-white fs-1 p-3">{timeString[1] !== undefined ? timeString[1] : "0"}</div>
                <div className="bg-dark text-white fs-1 p-3">{timeString[0] !== undefined ? timeString[0] : "0"}</div>
                {/**<div className="bg-dark text-white fs-1 p-3">{timeString[3] !== undefined ? timeString[3] : 0}</div>
                <span>{props.time}</span>
                <div className="bg-dark text-white fs-1 p-3">{timeString[2] !== undefined ? timeString[2] : 0}</div>
                <div className="bg-dark text-white fs-1 p-3">{timeString[1] !== undefined ? timeString[1] : 0}</div>
                <div className="bg-dark text-white fs-1 p-3">{timeString[0] !== undefined ? timeString[0] : 0}</div> */}
            </div>
        </div>
    );
}

SecondsCounter.propTypes = {
    time: PropTypes.number
}