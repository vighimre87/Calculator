// import libraries
import React, { useState, useEffect } from "react";
import convert from "convert-units";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
    updateInputValue("right", "");
    updateInputValue("left", "");
  }, [exchangeOption]);

  // unit options state management
  const [unitOptions, setUnitOptions] = useState();

  // left conversion states management
  const [leftUnitOption, setLeftUnitOption] = useState("");
  useEffect(() => {
    console.log("leftUnitOption is changed......", leftUnitOption);
    const leftInputValueCurr = getInputValue("left");

    if (!leftInputValueCurr) {
      updateInputValue("left", 0);
    }

    updateRightInput();
  }, [leftUnitOption]);

  // right conversion states management
  const [rightUnitOption, setRightUnitOption] = useState("");
  useEffect(() => {
    console.log("rightUnitOption is changed......", rightUnitOption);
    const rightInputValueCurr = getInputValue("right");

    if (!rightInputValueCurr) {
      updateInputValue("right", 0);
    }

    updateLeftInput();
  }, [rightUnitOption]);

  const leftInputChangeHandler = (event) => {
    updateRightInput();
  };

  const rightInputChangeHandler = (event) => {
    updateLeftInput();
  };

  // update input fields
  const isInputsValid = () => leftUnitOption && rightUnitOption;
  const updateInputValue = (direction, value) => {
    const input = document.querySelector(`#${direction}-number`);
    input.value = value;
  };
  const getInputValue = (direction) => {
    return +document.querySelector(`#${direction}-number`).value;
  };

  const updateRightInput = () => {
    console.log("updateRightInput.....");
    if (isInputsValid()) {
      const leftInputValue = getInputValue("left");
      console.log("leftInputValue: ", leftInputValue);
      if (leftInputValue !== "") {
        const newRightInputValue = convert(leftInputValue)
          .from(leftUnitOption)
          .to(rightUnitOption);

        console.log("newRightInputValue: ", newRightInputValue);
        // setRightInputValue(newRightInputValue);
        updateInputValue("right", newRightInputValue);
      }
    }
  };

  const updateLeftInput = () => {
    console.log("updateLeftInput.....");

    if (isInputsValid()) {
      const rightInputValue = getInputValue("right");
      console.log("rightInputValue: ", rightInputValue);
      if (rightInputValue !== "") {
        const newLeftInputValue = convert(rightInputValue)
          .from(rightUnitOption)
          .to(leftUnitOption);
        console.log("newLeftInputValue: ", newLeftInputValue);

        updateInputValue("left", newLeftInputValue);
      }
    }
  };

  const onSwapButtonClick = () => {
    const leftUnitOptionCurr = leftUnitOption;
    const leftInputValueCurr = getInputValue("left");
    const rightUnitOptionCurr = rightUnitOption;
    const rightInputValueCurr = getInputValue("right");

    setLeftUnitOption(rightUnitOptionCurr);
    updateInputValue("right", leftInputValueCurr);
    setRightUnitOption(leftUnitOptionCurr);
    updateInputValue("left", rightInputValueCurr);
  };

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "1200px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 10px"
        }}
      >
        <Grid container sx={{ padding: "20px", minHeight: "400px" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginBottom: "20px" }}
          >
            <Grid item xs={8}>
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
            </Grid>
          </Grid>

          <Grid container directin="row" justifyContent="space-around">
            <Grid item>
              <Grid container direction="column">
                <TextField
                  // left input
                  sx={{ marginBottom: "20px" }}
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
                  onChange={leftInputChangeHandler}
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
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md="auto">
              <Grid container justifyContent="center" alignItems="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  size="large"
                  onClick={onSwapButtonClick}
                >
                  <SwapHorizIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction="column">
                <TextField
                  // right input
                  sx={{ marginBottom: "20px" }}
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
                  onChange={rightInputChangeHandler}
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Units;
