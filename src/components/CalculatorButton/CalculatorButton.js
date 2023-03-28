import React from "react";
// import Button from '@mui/material/Button';
import "./CalculatorButton.css";


function CalculatorButton (props)  {
    return (
        <button variant="contained" className={props.className} onClick={props.onClick}>{props.value}</button>
    )
}

export default CalculatorButton;