// import libraries
import React, {useState} from "react";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import CalculatorButtonWrapper from "../../components/CalculatorButtonWrapper/CalculatorButtonWrapper";
import CalculatorWrapper from "../../components/CalculatorWrapper/CalculatorWrapper";
import CalculatorScreen from "../../components/CalculatorScreen/CalculatorScreen";
let basicMath = require('advanced-calculator')

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

    // Declaring calculating states using useState()
    const [calculate, setCalculate] = useState({
        symbol: "",
        number: 0,
        result: 0,
    });


    // Declaring clickHandlers

    // Clickhandler for number buttons
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

    // Clickhandler for decimal point button
    const decPointClickHandler = (e) => {
        e.preventDefault();
        const clickValue = e.target.innerHTML;

        setCalculate({
            ...calculate,
            number: !calculate.number.toString().includes(".") ? calculate.number + value : calculate.number,
        });
    };

    // Clickhandler for operation buttons
    const operatorClickHandler = (e) => {
        e.preventDefault();
        const clickValue = e.target.innerHTML;

        setCalculate({
            ...calculate,
            symbol: clickValue,
            result: !calculate.result && calculate.number ? calculate.number : calculate.result,
            number: 0,
        });
    };

    const equalsClickHandler = () => {
        if(calculate.symbol && calculate.number) {
            const calculation = (num1, num2, operator) =>
            operator === "+"
            ? basicMath.add(num1, num2)
            : operator === "-"
            ? basicMath.sub(num1, num2)
            : operator === "X"
            ? basicMath.multiply(num1, num2)
            : basicMath.divide(num1, num2);

            setCalculate({
                ...calculate,
                result:
                calculate.number === "0" && calculate.symbol === "/"
                ? "You can't divide a number with 0"
                : calculation(Number(calculate.result), Number(calculate.number), calculate.symbol),
                symbol: "",
                number: 0,
            });
        }
    };



    return (
        <main className="calcBox">
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
        </main>
    );
}

export default Calculator;
