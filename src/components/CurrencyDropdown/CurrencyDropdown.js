import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function CurrencyDropdown() {
  const [currency, setCurrency] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="currency-label">Currency</InputLabel>
        <Select
          labelId="currency-select-label"
          id="currency-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={currency}
          label="currency"
          onChange={handleChange}
        >
          <MenuItem value='USD'>US Dollar</MenuItem>
          <MenuItem value='GBP'>British Pound</MenuItem>
          <MenuItem value='EUR'>Euro</MenuItem>
          <MenuItem value='JPY'>Japanese Yen</MenuItem>
          <MenuItem value='CHF'>Swiss Franc</MenuItem>
          <MenuItem value='AUD'>Australian Dollar</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}