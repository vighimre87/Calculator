import React from 'react';
import {Textfit} from "react-textfit";

function CalculatorScreen({value}) {
    // import Textfit in order to make the screen responsive
    return (<Textfit className='screen' mode='single' max={70}>
        {value}
    </Textfit>);
}

export default CalculatorScreen;