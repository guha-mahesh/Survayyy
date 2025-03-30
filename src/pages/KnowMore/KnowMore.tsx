import { useNavigate } from "react-router-dom";

const KnowMore = () => {
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
          <button
            className="nav-button"
            onClick={() => navigate("/BuyUsACoffee")}
          >
            {" "}
            buy us a coffee
          </button>
        </nav>
      </div>
      <div className="FullPage">
        <div className="about-container">
          <header className="about-header">
            <h1>About Us</h1>
            <p>
              Learn more about our mission, vision, and the team behind our
              website.
            </p>
          </header>

          <section className="contact">
            <h2>Contact Us</h2>
            <p>
              If you'd like to get in touch with us, feel free to reach out
              through the following:
            </p>
            <ul>
              <li>Email: guhamaheshv@gmail,com</li>
              <li>Phone: +1 (346) 368-4903</li>
              <li>Address: 360 Huntington Avenue, Boston, Ma</li>
            </ul>
          </section>

          <footer className="about-footer">
            <p>&copy; 2025 Our Website. All rights reserved. (probably not)</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default KnowMore;
