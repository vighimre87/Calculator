import React from 'react';

 function CalculatorWrapper({children}) {
    return (<div className='calcWrapper'>
      {children}
    </div>);
 }
 
 export default CalculatorWrapper;