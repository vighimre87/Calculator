import * as React from 'react';
import CurrencyDropdown from '../CurrencyDropdown/CurrencyDropdown';

import { useState, useEffect } from 'react';

function ConverterContainer() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('USD');


  useEffect(() => {}, 
  [])

  return (
    <div>
      <p>From </p>
      <CurrencyDropdown amount={amount1} currency={currency1} />
      <p>To</p>
      <CurrencyDropdown amount={amount2} currency={currency2} />
    </div>
  );
}

export default ConverterContainer;