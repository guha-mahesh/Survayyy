import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { AuthProvider } from "./components/AuthContext.tsx";
import "./components/FormCardCreator/FormCardCreator.css";
import "./components/InputBox/InputBox.css";
import "./components/FormCard/FormCard.css";
import "./components/Carousel/Carousel.css";
import "./pages/Home/Home.css";
import "./pages/Login/loginPage.css";
import "./pages/KnowMore/KnowMore.css";
import "./pages/BuyUsACoffee/BuyUsACoffee.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);
