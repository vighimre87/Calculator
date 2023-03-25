import * as React from 'react';
import CurrencyDropdown from '../CurrencyDropdown/CurrencyDropdown';



function ConverterContainer() {

  

  return (
    <div>
      <p>From </p>
      <CurrencyDropdown amount={1} currency='USD' />
      <p>To</p>
      <CurrencyDropdown amount={1} currency='USD' />
    </div>
  );
}

export default ConverterContainer;