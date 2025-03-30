import { useNavigate } from "react-router-dom";

const BuyUsACoffee = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navBar">
        <nav>
          <button className="logo">Survayyy</button>
          <button className="nav-button" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="nav-button" onClick={() => navigate("/logInPage")}>
            Log Out
          </button>
          <button className="nav-button" onClick={() => navigate("/knowMore")}>
            {" "}
            know more!
          </button>
          <button className="nav-button"> buy us a coffee</button>
        </nav>
      </div>
      <div className="buy-coffee-container">
        <h1>Support Us with a Coffee!</h1>
        <p>
          Your support helps us keep going! If you enjoy what we do, consider
          buying us a coffee.
        </p>
        <button onClick={() => alert("We were joking bruh")}>
          Buy a Coffee
        </button>
      </div>
    </>
  );
};

export default BuyUsACoffee;
