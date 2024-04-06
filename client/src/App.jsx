import React from "react";
import { Route, Routes } from "react-router-dom";

import { CampaignDetails, CreateCampaign, Profile, Home } from "./pages";
import { Sidebar } from "./components";

const App = ({ onClick }) => {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Sidebar />
        <div className="flex justify-center">
          <button
            className="bg-[#8667f8] hover:bg-[#9a7ffa]  p-2 rounded-md flex justify-center items-center m-4 text-center pr-8 pl-8 text-white font-bold"
            onClick={onClick}
          >
            Go To the Dashboard
          </button>
        </div>

        <Routes>
          <Route path="/crowd-funding" element={<Home to="/home" />} />
          <Route path="/" element={<Home to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
