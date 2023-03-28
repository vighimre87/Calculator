// import styling
import "./style.css";

// import libraries
import React, {useState} from "react";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import CalculatorButtonWrapper from "../../components/CalculatorButtonWrapper/CalculatorButtonWrapper";
import CalculatorWrapper from "../../components/CalculatorWrapper/CalculatorWrapper";
import CalculatorScreen from "../../components/CalculatorScreen/CalculatorScreen";
let basicMath = require('advanced-calculator')

// The calculator follows similar logic as the next tutorial:
// https://www.sitepoint.com/react-tutorial-build-calculator-app/
// Declaring the values for the buttons
const buttonSymbols = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  
  const removeSpaces = (num) => num.toString().replace(/\s/g, "");
  
  function Calculator() {

    // Declare useState for the calculation states
    let [calculation, setCalculation] = useState({
      symbol: "",
      number: 0,
      result: 0,
    });

    // Clickhandler for number values
    const numberClickHandler = (e) => {
      e.preventDefault();
      const clickValue = e.target.innerHTML;
  
      if (removeSpaces(calculation.number).length < 16) {
        setCalculation({
          ...calculation,
          number:
            calculation.number === 0 && clickValue === "0"
              ? "0"
              : removeSpaces(calculation.number) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calculation.number + clickValue)))
              : toLocaleString(calculation.number + clickValue),
          result: !calculation.symbol ? 0 : calculation.result,
        }, []);
      }
    };
  
    // Clickhandler for the decimal point button
    const decPointClickHandler = (e) => {
      e.preventDefault();
      const ClickValue = e.target.innerHTML;
  
      setCalculation({
        ...calculation,
        number: !calculation.number.toString().includes(".") ? calculation.number + ClickValue : calculation.number,
      },[]);
    };
  
    // Clickhandler for operators
    const operatorClickHandler = (e) => {
      e.preventDefault();
      const clickValue = e.target.innerHTML;
  
      setCalculation({
        ...calculation,
        symbol: clickValue,
        result: !calculation.result && calculation.number ? calculation.number : calculation.result,
        number: 0,
      },[]);
    };
  
    // Clickhandler for the equal button
    const equalsClickHandler = () => {
      if (calculation.symbol && calculation.number) {
        const math = (num1, num2, symbol) =>
          symbol === "+"
            ? basicMath.add(num1, num2)
            : symbol === "-"
            ? basicMath.sub(num1, num2)
            : symbol === "X"
            ? basicMath.multiply(num1, num2)
            : basicMath.divide(num1, num2);
  
        setCalculation({
          ...calculation,
          result:
            calculation.number === "0" && calculation.symbol === "/"
              ? "You can't divide with 0"
              : toLocaleString(
                  math(
                    Number(removeSpaces(calculation.result)),
                    Number(removeSpaces(calculation.number)),
                    calculation.symbol
                  )
                ),
          symbol: "",
          number: 0,
        },[]);
      }
    };
  
    // Clickhandler for prefix
    const prefixClickHandler = () => {
      setCalculation({
        ...calculation,
        number: calculation.number ? toLocaleString(removeSpaces(calculation.number) * -1) : 0,
        result: calculation.result ? toLocaleString(removeSpaces(calculation.result) * -1) : 0,
        symbol: "",
      },[]);
    };
  
    // Clickhandler for percent button
    const percentClickHandler = () => {
      let num = calculation.number ? parseFloat(removeSpaces(calculation.number)) : 0;
      let res = calculation.result ? parseFloat(removeSpaces(calculation.result)) : 0;
  
      setCalculation({
        ...calculation,
        number: (num /= Math.pow(100, 1)),
        result: (res /= Math.pow(100, 1)),
        symbol: "",
      },[]);
    };
  
    // Clickhandler for the Clear button
    const clearClickHandler = () => {
      setCalculation({
        ...calculation,
        symbol: "",
        number: 0,
        result: 0,
      },[]);
    };
  


    return (
      <main className="pageWrapper">
        <CalculatorWrapper>
            <CalculatorScreen value={calculation.number ? calculation.number : calculation.result}/>
            <CalculatorButtonWrapper>
                {buttonSymbols.flat().map((symbol, i) => {
                    return (
                        <CalculatorButton
                        key={i}
                        className={symbol === "=" ? "equals"
                        : (symbol === "+" || symbol === "-" || symbol === "/" || symbol === "X")
                        ? "operator" : ""}
                        value={symbol}
                        onClick={
                            symbol === "C"
                              ? clearClickHandler
                              : symbol === "+/-"
                              ? prefixClickHandler
                              : symbol === "%"
                              ? percentClickHandler
                              : symbol === "="
                              ? equalsClickHandler
                              : symbol === "/" || symbol === "X" || symbol === "-" || symbol === "+"
                              ? operatorClickHandler
                              : symbol === "."
                              ? decPointClickHandler
                              : numberClickHandler
                          }
                />
                    );
                })}
            </CalculatorButtonWrapper>
        </CalculatorWrapper>
      </main>
    );
}

export default Calculator;
