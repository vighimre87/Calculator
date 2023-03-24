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
  useEffect(() => {
    console.log("leftUnitOption is changed......", leftUnitOption);
    updateRightInput();
  }, [leftUnitOption]);

  const [leftInputValue, setLeftInputValue] = useState("");
  useEffect(() => {
    console.log("leftInputValue is changed......", leftInputValue);
    updateRightInput();
  }, [leftInputValue]);

  // right conversion states management
  const [rightUnitOption, setRightUnitOption] = useState("");
  useEffect(() => {
    console.log("rightUnitOption is changed......", rightUnitOption);
    updateLeftInput();
  }, [rightUnitOption]);

  const [rightInputValue, setRightInputValue] = useState("");
  useEffect(() => {
    console.log("rightInputValue is changed......", rightInputValue);
    updateLeftInput();
  }, [rightInputValue]);

  const isInputsValid = () => leftUnitOption && leftInputValue;
  const updateRightInput = () => {
    if (isInputsValid()) {
      const newRightInputValue = convert(leftInputValue)
        .from(leftUnitOption)
        .to(rightUnitOption);
      setRightInputValue(newRightInputValue);
    }
  };

  const updateLeftInput = () => {
    if (isInputsValid()) {
      const newLeftInputValue = convert(rightInputValue)
        .from(rightUnitOption)
        .to(leftUnitOption);
      setLeftInputValue(newLeftInputValue);
    }
  };

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
        InputProps={{
          readOnly: !leftUnitOption || !rightUnitOption
        }}
        helperText={
          leftUnitOption ? "" : "Please select an unit from the dropdown menu."
        }
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
        InputProps={{
          readOnly: !leftUnitOption || !rightUnitOption
        }}
        helperText={
          rightUnitOption ? "" : "Please select an unit from the dropdown menu."
        }
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
