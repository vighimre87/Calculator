// import libraries
import React, {useState} from "react";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import CalculatorButtonWrapper from "../../components/CalculatorButtonWrapper/CalculatorButtonWrapper";
import CalculatorWrapper from "../../components/CalculatorWrapper/CalculatorWrapper";
import CalculatorScreen from "../../components/CalculatorScreen/CalculatorScreen";

// import styling
import "./style.css";


function Calculator() {

    // creating symbols for the buttons
    const buttonSymbols = [
        ["C", "+/-", "%", "/"],
        ["7", "8", "9", "X"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="]
    ]

    const [calculate, setCalculate] = useState({
        symbol: "",
        number: 0,
        result: 0,
    });

    const numberClickHandler = (e) => {
        e.preventDefault();
        const clickValue = e.target.innerHTML;

        if (calculate.number.length < 16) {
            setCalculate({
                ...calculate,
                number:
                calculate.number === 0 && clickValue === "0"
                ? "0"
                : calculate.number % 1 === 0
                ? Number(calculate.number + clickValue)
                : calculate.number + value,
                result: !calculate.symbol ? 0 : calculate.result,
                
            })
        }
    };

    return (
        <CalculatorWrapper>
            <CalculatorScreen value={calculate.number ? calculate.number : calculate.result}/>
            <CalculatorButtonWrapper>
                {buttonSymbols.flat().map((buttonSymbol, i) => {
                    return (
                        <CalculatorButton
                        key={i}
                        className={buttonSymbol === "=" ? "equals" : ""}
                        value={buttonSymbol}
                        onClick={() => {
                            buttonSymbol === "C" 
                            ? resetClickHandler
                            : buttonSymbol === "+/-"
                            ? invertClickHandler
                            : buttonSymbol === "%"
                            ? percentClickHandler
                            : buttonSymbol === "="
                            ? equalsClickHandler
                            : buttonSymbol === "+" || buttonSymbol === "-" || buttonSymbol === "/" || buttonSymbol === "*"
                            ? operatorClickHandler
                            : buttonSymbol === "."
                            ? decPointClickHandler
                            : numberClickHandler
                }}
                />
                    );
                })}
            </CalculatorButtonWrapper>
        </CalculatorWrapper>
    );
}

export default Calculator;
