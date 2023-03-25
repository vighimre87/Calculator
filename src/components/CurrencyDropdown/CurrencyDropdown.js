import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CurrencyDropdown(props) {
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
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <TextField id="standard-basic" label="Amount" variant="standard" />
        </Box>
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

export default CurrencyDropdown;