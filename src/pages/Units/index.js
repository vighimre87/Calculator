// import libraries
import React, { useState, useEffect, useMemo } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import convert from "convert-units";
import debounce from "lodash/debounce";

// import components
import UnitDropdown from "../../components/UnitDropdown/UnitDropdown";

// import constants
import { UNITS } from "../../utils/units";

// import styling
import "./style.css";

function Units() {
  // messages
  const selectDropDownUnitMsg =
    "Please select an unit from both dropdown menus.";

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
    updateInputValue("left", "");
    updateInputValue("right", "");
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

  // debounce config
  const changeLeftInputHandler = (event) => {
    setLeftInputValue(event.target.value);
  };

  const debouncedLeftInputChangeHandler = useMemo(
    () => debounce(changeLeftInputHandler, 300),
    []
  );

  const changeRightInputHandler = (event) => {
    setRightInputValue(event.target.value);
  };

  const debouncedRightInputChangeHandler = useMemo(
    () => debounce(changeRightInputHandler, 300),
    []
  );

  // update input fields
  const isInputsValid = () => leftUnitOption && rightUnitOption;
  const updateInputValue = (direction, value) => {
    const input = document.querySelector(`#${direction}-number`);
    input.value = value;
  };
  const updateRightInput = () => {
    if (isInputsValid()) {
      const newRightInputValue = convert(leftInputValue)
        .from(leftUnitOption)
        .to(rightUnitOption);
      setRightInputValue(newRightInputValue);
      updateInputValue("right", newRightInputValue);
    }
  };

  const updateLeftInput = () => {
    if (isInputsValid()) {
      const newLeftInputValue = convert(rightInputValue)
        .from(rightUnitOption)
        .to(leftUnitOption);
      setLeftInputValue(newLeftInputValue);
      updateInputValue("left", newLeftInputValue);
    }
  };

  const onSwapButtonClick = () => {
    const leftUnitOptionCurr = leftUnitOption;
    const leftInputValueCurr = leftInputValue;
    const rightUnitOptionCurr = rightUnitOption;
    const rightInputValueCurr = rightInputValue;

    setLeftUnitOption(rightUnitOptionCurr);
    setLeftInputValue(rightInputValueCurr);
    setRightUnitOption(leftUnitOptionCurr);
    setRightInputValue(leftInputValueCurr);
  };

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
        helperText={leftUnitOption ? "" : selectDropDownUnitMsg}
        onChange={debouncedLeftInputChangeHandler}
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
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        size="large"
        onClick={onSwapButtonClick}
      >
        <SwapHorizIcon />
      </IconButton>
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
        helperText={rightUnitOption ? "" : selectDropDownUnitMsg}
        onChange={debouncedRightInputChangeHandler}
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
