import React from 'react';
import './CalculatorButtonWrapper.css';

function CalculatorButtonWrapper({children}) {
    return <div className='buttonContainer'>{children}</div>;
}

export default CalculatorButtonWrapper;