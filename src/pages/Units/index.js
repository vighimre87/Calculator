// import libraries
import React, { useState, useEffect } from "react";

// import components
import UnitDropdown from "../../components/UnitDropdown/UnitDropdown";

// import constants
import { EXCHANGE_OPTIONS } from "../../utils/units";

// import styling
import "./style.css";

function Units() {
  const [exchangeOption, setExchangeOption] = useState(
    EXCHANGE_OPTIONS[0].value
  );

  // listen to the changes of exchangeOption
  useEffect(() => {
    console.log("exchangeOption is changed.....", exchangeOption);
  }, [exchangeOption]);

  return (
    <UnitDropdown
      id="exchange"
      label="Options"
      selectedValue={exchangeOption}
      options={EXCHANGE_OPTIONS}
      handleChange={(event) => {
        setExchangeOption(event.target.value);
      }}
    />
  );
}

export default Units;
