import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactImg } from "../assets";
import "./Contact.css"; // Import CSS file for animations

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5w4cg2h", "template_vqi4mdd", form.current, {
        publicKey: "NKsgedHI-eGl8dNvL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="mx-auto max-w-7xl bg-[#1c1c24] p-5">
      <div
        id="contact-us"
        className="flex mb-4 rounded-xl mx-auto bg-[#1c1c24] sm:p-6 flex-col md:flex-row md:gap-20 md:p-10"
        style={{
          backgroundImage: `linear-gradient(to right, #FF6B6B, #6e87fa)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={contactImg}
            alt="Illustration"
            className="w-full lg:w-3/4 xl:w-4/5 scale-105 sm:p-2 md:scale-100 animate-moveUpDown"
            style={{
              animation: "moveUpDown 3s infinite",
            }}
          />
        </div>

        <div className="w-full lg:w-1/2 mt-10 md:mt-0 flex flex-col justify-center">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Get In Touch
          </h1>
          <form ref={form} onSubmit={sendEmail} className="mt-5 space-y-3">
            <label className="block">
              <span className="text-gray-950">Name:</span>
              <input
                className="mt-1 p-2 bg-transparent border-2 border-gray-200 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="user_name"
              />
            </label>
            <label className="block">
              <span className="text-gray-950">Email:</span>
              <input
                className="mt-1 p-2 bg-transparent border-2 border-gray-200 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="email"
                name="user_email"
              />
            </label>
            <label className="block">
              <span className="text-gray-950">Message:</span>
              <textarea
                className="mt-1 p-3 h-40 bg-transparent border-2 border-gray-200 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="message"
              ></textarea>
            </label>
            <input
              className="mt-1 block text-xl w-full py-2 px-3 rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
