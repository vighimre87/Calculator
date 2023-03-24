// import libraries
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import convert from "convert-units";

// import components
import UnitDropdown from "../../components/UnitDropdown/UnitDropdown";

// import constants
import { UNITS } from "../../utils/units";

// import styling
import "./style.css";

function Units() {
  // exchange option state management
  const [exchangeOption, setExchangeOption] = useState(
    UNITS.EXCHANGE_OPTIONS[0].value
  );
  useEffect(() => {
    console.log("exchangeOption is changed.....", exchangeOption);
    const optionName = UNITS[`${exchangeOption.toUpperCase()}_UNITS`];
    setUnitOptions(optionName);
    setLeftUnitOption("");
    setRightUnitOption("");
    setLeftInputValue("");
    setRightInputValue("");
  }, [exchangeOption]);

  // unit options state management
  const [unitOptions, setUnitOptions] = useState();

  // left conversion states management
  const [leftUnitOption, setLeftUnitOption] = useState("");
  const [leftInputValue, setLeftInputValue] = useState("");
  useEffect(() => {
    console.log("leftInputValue is changed......", leftInputValue);
  }, [leftInputValue]);

  // right conversion states management
  const [rightUnitOption, setRightUnitOption] = useState("");
  const [rightInputValue, setRightInputValue] = useState("");
  useEffect(() => {
    console.log("rightInputValue is changed......", rightInputValue);
  }, [rightInputValue]);

  // mi2
  // console.log(convert().describe("mi2"));

  return (
    <div>
      <UnitDropdown
        // exchange option dropdown
        id="exchange"
        label="Options"
        selectedValue={exchangeOption}
        options={UNITS.EXCHANGE_OPTIONS}
        handleChange={(event) => {
          setExchangeOption(event.target.value);
        }}
      />
      <TextField
        // left input
        id="left-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        value={leftInputValue}
        onChange={(event) => {
          setLeftInputValue(event.target.value);
        }}
      />
      <UnitDropdown
        // left dropdown
        id="left-dropdown"
        label="Select Unit"
        selectedValue={leftUnitOption}
        options={unitOptions}
        handleChange={(event) => {
          setLeftUnitOption(event.target.value);
        }}
      />
      <TextField
        // right input
        id="right-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        value={rightInputValue}
        onChange={(event) => {
          setRightInputValue(event.target.value);
        }}
      />
      <UnitDropdown
        // right dropdown
        id="right-dropdown"
        label="Select Unit"
        selectedValue={rightUnitOption}
        options={unitOptions}
        handleChange={(event) => {
          setRightUnitOption(event.target.value);
        }}
      />
    </div>
  );
}

export default Units;
