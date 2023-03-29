# CleverCalc

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
CleverCalc is a React application that allows users to use calculator and convert values between units of measures. It includes a wide range of unit categories such as currency, length, weight, temperature, and more to choose from. The program performs calculations and conversions, and displaying the result in a clear and easy-to-read format.
Overall, this application is a useful tool for anyone who needs to quickly and easily convert values between different units of measurement regularly whether for personal or professional use.

## Table of Contents
  - [Installation](#installation)
  - [Technologies](#technologies)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

## Installation
  1. Download the master folder from GitHub or clone it from GitHub.
  2. In order to run the application you will need Node JS (I used v16.1). If you haven't got it, install it on your computer.
  3. Once you have these steps navigate to the root folder in the command line and create a new React application:
  ```
  npx create-react-app [app-name]
  ```
  4. Then run the following commands to install React Router DOM, TextFit, axios, convert-units, advanced-calculator, Material UI:
  ```
  npm i react-router-dom
  ```
  
  ```
  npm install react-textfit --save
  ```

  ```
  npm i axios
  ```

  ```
  npm install convert-units --save
  ```

  ```
  npm i advanced-calculator
  ```

  ```
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material

  ```

  5. From the downloaded project copy the src folder and replace src folder in the newly created React app.
  6. Run the next command to fetch the website:
  ```
  npm start
  ``` 

## Languages/Technologies
In this project, we used the following technologies:
* HTML
* CSS
* Javascript ES6
* Server-side API (**[exchangerate.host](https://exchangerate.host/#/docs)**)
* Git/Github
* React.js
* React libraries/packages, including **[Material-UI](https://mui.com/)**, **[AXIOS](https://www.npmjs.com/package/axios)**, **[React-textfit](https://www.npmjs.com/package/react-textfit)**, **[Prop-types](https://www.npmjs.com/package/prop-types)**, **[Router](https://www.npmjs.com/package/router)**.
* Netlify

## Usage
When the user open the website he/she can find a simple website with a clear UI and an easy navigation. On the Home page the user can find an image of a calculator and a simple welcome message. The Home page also renders the header and the footer components that are rendered across the entire application.

## Calculator
The Calculator page allows the user to make simple mathematical calculations with a calculator using the calculator buttons. The calculator using React hooks in the background to make the calculations and update the output on the calculator screen. The calculator also use Textfit npm package to allow the longer outputs to render rensponsively. The buttons are made of a single Button component that renders all the button elements that has been passed down as props from the Calculator page. The buttons also use different color code for the equal button, the operators and the rest of the buttons.

Please see a mockup image of the Calculator page:

  <br>
  <img src="https://i.imgur.com/fYAjVn8.png" alt="Mockup image of the calculator page" style="width:500px;"/>
  <br>

## Currency page
The currency page allows users to exchange between six main currencies, namely US Dollar, British Pound, Euro, Japanese Yen, Swiss Franc and Australian Dollar. 
The currency converter only accepts number as the input. When the amount or currecy changes in one currency container, the amount in another currency container will change responsively. The currency rates are based on the latest rates which are fetched from the **[exchangerate.host](https://exchangerate.host/#/docs)** API.

Here is the screenshot of the currency page.

<br>
  <img src="https://i.imgur.com/LXbiDCM.png" alt="Mockup image of the currency page" style="width:500px;"/>
<br>


## Units page:
The units page typically consist of input fields where users can enter values and dropdown menus that allow users to select the unit of measurement they want to convert from and the unit of measurement they want to convert to. It supports a wide range of categories of measurement, including length, weight, volume, temperature, time, speed, voltage, and more. Each category can have multiple units to choose from, such as metres, feet, inches, Celsius, Fahrenheit, litres, gallons, etc. The result will be stored in the local storage and will be retrieved when the page is loaded so that users don't need to worry about losing it because of the accidental page refreshing.

You can see an image of the Units page here:

<br>
  <img src="https://i.imgur.com/ybgkvC2.png" alt="Mockup image of the units page" style="width:500px;"/>
<br>

Deployed link:
Please view our application here: https://clevercalc.netlify.app/.


## Contributing
  Any contribution is greatly appreciated.
  If you have any suggestion that would make this project better, please fork the repo and create a pull request. You can also just open an issue with the "enhancement". And also don't forget to give a star to the project!
  1. Fork the Project
  2. Create your Feature Branch (git checkout -b [featurebranch])
  3. Commit your Changes (git commit -m '[add your message here]')
  4. Push to the Branch (git push origin [featurebranch])
  5. Open a Pull Request

  ## Tests
  There are no tests for this project but feel free to add your own tests.

  ## License
  This project is covered under MIT license.

  ## Credits
  Imre Vigh, Mingzhao Zhou, Xiao Zhao

  ## Questions
  If you have got any question feel free to check our GitHub accounts on https://github.com/vighimre87, https://github.com/Mingzhao91 or https://github.com/xiaozhao1111. You can send us an email to the [vighimre87@gmail.com](mailto:vighimre87@gmail.com), [edwardwhite7@hotmail.com](mailto:edwardwhite7@hotmail.com) or [zhaoxiao20071106@gmail.com](mailto:zhaoxiao20071106@gmail.com) email addresses.