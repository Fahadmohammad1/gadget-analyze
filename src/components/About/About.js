import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-screen flex flex-col justify-center mt-6 bg-teal-300 w-3/4 mx-auto rounded-xl p-5">
      <h1 className="text-3xl font-semibold">Location</h1>
      <p className="text-[#c94ced]">Gadget Analyze</p>
      <p>Shop no: 4, 3rd floor, central plaza</p>
      <p>204 CDA Avenue, Dhaka </p>
      <h1 className="text-lg">Contact:</h1>
      <p>Mobile: +880-014535655</p>
      <div className="flex text-3xl gap-4 justify-center mt-3">
        <FaFacebook />
        <FaWhatsapp />
        <FaInstagram />
      </div>
    </div>
  );
};

export default About;
