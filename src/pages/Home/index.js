// import libraries
import React from "react";
import WelcomeBoard from "../../components/WelcomeBoard/WelcomeBoard";

// import styling
import "./style.css";

function Home() {
    return (
        <div className="homePageContainer">
            <div className="imgContainer">
            <img src="https://i.imgur.com/jBnPwkr.jpg" alt="Calculator and measures"></img>
            </div>
            <div className="welcomeBoardContainer">
            <WelcomeBoard
            content="Welcome to the Clever Calc app! We hope you have a nice day. You can do simple calculation, currency exchange and unit conversion with our app.
            We hope you find it useful. Enjoy! 😊"
            width="300px"
            height="300px"
            padding="20px"/>
        </div>
        </div>
    );
}

export default Home;
