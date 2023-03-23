// import libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/Home/index";
import Calculator from "./pages/Calculator/index";
import Currency from "./pages/Currency/index";
import Units from "./pages/Units/index";

// import components
import Header from "./components/Header/Header";
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="currency" element={<Currency />} />
          <Route path="Units" element={<Units />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
