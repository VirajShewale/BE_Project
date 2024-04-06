// import React from "react";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import TeamMembers from "./TeamMembers";
// import Header from "./Header";
// import Features from "./Features.jsx";

// const Home = ({ onClick }) => {
//   return (
//     <div id="home">
//       <Header onClick={onClick} className="" />
//       <div
//         className="mt-28 bg-[#1c1c24]"
//         style={{
//           backgroundSize: "cover, cover",
//           backgroundPosition: "left, right",
//           backgroundRepeat: "repeat, repeat",
//         }}
//       >
//         <div className=" text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
//           <div className="max-w-3xl text-3xl text-center mx-auto">
//             <h1 className="text-7xl font-bold mb-2">Welcome</h1>
//             <h1 className="text-7xl font-bold mb-2">to</h1>
//             <h1 className="text-7xl font-bold">Crypto Crowd</h1>

//             <div className="text-center rounded-3xl font-sans p-8 mr-40 ml-44 border-1 border-none">
//               <p className="text-lg mt-5 leading-relaxed">
//                 A platform for do-gooders with a will to make a change in the
//                 world or at least in the lives of people who deserve better.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <Features />
//         </div>
//         <div>
//           <AboutUs />
//         </div>
//         <div>
//           <ContactUs />
//         </div>
//         <div>
//           <TeamMembers />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import TeamMembers from "./TeamMembers";
import Header from "./Header";
import Features from "./Features.jsx";

const Home = ({ onClick }) => {
  return (
    <div id="home">
      <Header onClick={onClick} className="" />
      <div
        className="mt-28 bg-[#1c1c24] text-white font-sans"
        style={{
          backgroundSize: "cover, cover",
          backgroundPosition: "left, right",
          backgroundRepeat: "repeat, repeat",
        }}
      >
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-3xl text-3xl text-center mx-auto">
          <h1 className="text-7xl font-bold mb-2">Welcome</h1>
          <h1 className="text-7xl font-bold mb-2">to</h1>
          <h1 className="text-7xl font-bold">Pro Fund</h1>

          <div className="text-center rounded-3xl p-8 border-none border-white">
            <p className="text-lg mt-5 leading-relaxed">
              A platform for do-gooders with a will to make a change in the
              world or at least in the lives of people who deserve better.
            </p>
          </div>
        </div>

        <div className="sm:px-6 lg:px-8">
          <Features />
        </div>
        <div className="sm:px-6 lg:px-8">
          <AboutUs />
        </div>
        <div className="sm:px-6 lg:px-8">
          <ContactUs />
        </div>
        <div className="sm:px-6 lg:px-8">
          <TeamMembers />
        </div>
      </div>
    </div>
  );
};

export default Home;
