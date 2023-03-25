import * as React from 'react';
import Box from '@mui/material/Box';
import CurrencyDropdown from '../CurrencyDropdown/CurrencyDropdown';
import { display } from '@mui/system';

function ConverterContainer() {
    return (
    <div>
      <p>From </p>
      <CurrencyDropdown />
      <p>To</p>
      <CurrencyDropdown />
    </div>
  );
}

export default ConverterContainer;