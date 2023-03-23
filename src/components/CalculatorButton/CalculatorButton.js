import React from "react";
import Button from '@mui/material/Button';


function CalculatorButton (props)  {
    return (
        <Button variant="contained" className={props.className} onClick={props.onClick}>{props.value}</Button>
    )
}

export default CalculatorButton;