import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import App from "./App";
import { StateContextProvider } from "./context";
import "./index.css";

import Footer from "./front_ui_component/Footer";
import Home from "./front_ui_component/Home";

const RootComponent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="bg-[#1c1c24]">
      {!isClicked && <Home onClick={handleClick} />}

      {isClicked && (
        <div>
          <ThirdwebProvider activeChain={Sepolia} clientId="bf1a88a4b0b705fbcc4c4130662afde4">
            <Router>
              <StateContextProvider>
                <App onClick={handleClick} />
              </StateContextProvider>
            </Router>
          </ThirdwebProvider>
        </div>
      )}
      {!isClicked && <Footer />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RootComponent />);
