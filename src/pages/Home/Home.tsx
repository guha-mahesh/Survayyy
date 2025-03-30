import FormCardCreator from "../../components/FormCardCreator/FormCardCreator";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
import GoogleLoginButton from "../../components/LogIn/GoogleLoginButton";
import Carousel from "../../components/Carousel/Carousel";
import LogIn from "../Login/logInPage";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return user ? (
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
            Know More!
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

      <div className="formCards">
        <div className="Creator">
          <div className="Add-A-Survey">
            <h2 className="CreateCaption">Add a Survey</h2>
          </div>
          <FormCardCreator />
        </div>
        <div className="DoForm">
          <div className="Do-A-Survey">
            <h2 className="DoCaption">Do a Survey</h2>
          </div>
          <Carousel></Carousel>
        </div>
      </div>
    </>
  ) : (
    <div>
      <LogIn />
    </div>
  );
};

export default Home;
