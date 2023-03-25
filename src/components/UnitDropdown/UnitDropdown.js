// import libraries
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function UnitDropdown(props) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${props.id}-label`}
        id={props.id}
        value={props.selectedValue}
        label={props.label}
        onChange={props.handleChange}
      >
        {props.options &&
          props.options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
            >{`${option.label}`}</MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default UnitDropdown;
