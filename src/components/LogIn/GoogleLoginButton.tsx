import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../AuthContext";

const GoogleLoginButton: React.FC = () => {
  const { setUser } = useAuth();

  const handleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      const decoded: any = jwtDecode(response.credential);
      setUser(decoded);

      window.location.href = "http://localhost:5173/";
    }
  };

  const handleFailure = () => {
    console.error("Login Failed");
  };

  return (
    <div className="custom-oauth-container">
      <GoogleOAuthProvider clientId="966408465819-c0aorj8c0igoktq5bu7cib3otpc7imfu.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginButton;
