// import libraries
import React, { useState, useEffect } from "react";
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
  }, [exchangeOption]);

  // left dropdown state management
  const [leftUnitOption, setLeftUnitOption] = useState("");

  // right dropdown state management
  const [rightUnitOption, setRightUnitOption] = useState("");

  // unit options state management
  const [unitOptions, setUnitOptions] = useState();

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
