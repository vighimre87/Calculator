import * as React from 'react';
import CurrencyDropdown from '../CurrencyDropdown/CurrencyDropdown';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './ConverterContainer.css'

function ConverterContainer() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    // only fetch the rates of USD,GBP,EUR,JPY,CHF,AUD from the API
    axios.get('https://api.exchangerate.host/latest?symbols=USD,GBP,EUR,JPY,CHF,AUD')
    .then((response) => {
      setRates(response.data.rates)
    })
  }, 
  [])


  //function to round the amounts
  function roundMoney(amount) {
    return amount.toFixed(3);
  }

  //function to handle the changes of amounts and currencies
  function handleAmount1Change(amount1) {
    setAmount2(roundMoney(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(roundMoney(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(roundMoney(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(roundMoney(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <div className='converter-container'>
      <div className='currency-group'>
        <h1>From </h1>
        <CurrencyDropdown amount={amount1} currency={currency1} onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} />
      </div>
      
      <div className='currency-group'>
        <h1>To</h1>
        <CurrencyDropdown amount={amount2} currency={currency2} onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} />
      </div>
      
      
    </div>
  );
}

export default ConverterContainer;