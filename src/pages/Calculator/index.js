// import libraries
import React, {useState} from "react";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import CalculatorButtonWrapper from "../../components/CalculatorButtonWrapper/CalculatorButtonWrapper";
import CalculatorWrapper from "../../components/CalculatorWrapper/CalculatorWrapper";
import CalculatorScreen from "../../components/CalculatorScreen/CalculatorScreen";

// import styling
import "./style.css";


function Calculator() {

    const buttonSymbols = [
        ["C", "+/-", "%", "/"],
        ["7", "8", "9", "X"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="]
    ]

    return (
        <CalculatorWrapper>
            <CalculatorScreen value="0"/>
            <CalculatorButtonWrapper>
                {buttonSymbols.flat().map((buttonSymbol, i) => {
                    return (
                        <CalculatorButton
                        key={i}
                        className={buttonSymbol === "=" ? "equals" : ""}
                        value={buttonSymbol}
                        onClick={() => {
                    console.log(`${buttonSymbol} clicked!`);
                }}
                />
                    );
                })}
            </CalculatorButtonWrapper>
        </CalculatorWrapper>
    );
}

export default Calculator;
