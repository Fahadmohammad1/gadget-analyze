import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-emerald-200 mt-6">
      <h4 className="font-medium p-5">
        &copy; All right reserved by{" "}
        <span className="text-[#c94ced]">Gadget Analyze</span> | 2022-2026
      </h4>
      <div className="flex justify-center text-2xl gap-4 pb-4">
        <FaFacebook></FaFacebook>
        <FaTwitter />
        <FaWhatsapp></FaWhatsapp>
      </div>
    </div>
  );
};

export default Footer;
