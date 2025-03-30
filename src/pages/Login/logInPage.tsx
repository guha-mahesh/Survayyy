import GoogleLoginButton from "../../components/LogIn/GoogleLoginButton";
import "./loginPage.css";
import mntnimg from "../../assets/mountains.png"; // Correct path

const LogIn = () => {
  return (
    <>
      <div className="wrapper">
        <div className="logInMenu">
          <div className="logInHere"> Log in here!</div>
          <GoogleLoginButton></GoogleLoginButton>
        </div>
      </div>
    </>
  );
};

export default LogIn;
