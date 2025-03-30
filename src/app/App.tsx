import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/logInPage";
import KnowMore from "../pages/KnowMore/KnowMore";
import BuyUsACoffee from "../pages/BuyUsACoffee/BuyUsACoffee";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/logInPage" element={<LogIn></LogIn>} />
        <Route path="/knowMore" element={<KnowMore></KnowMore>} />
        <Route path="/BuyUsACoffee" element={<BuyUsACoffee></BuyUsACoffee>} />
      </Routes>
    </Router>
  );
}

export default App;
