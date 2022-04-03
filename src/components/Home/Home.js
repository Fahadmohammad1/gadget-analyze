import React from "react";

const Home = () => {
  return (
    <div className="md:flex justify-center items-center mt-8 ">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-extrabold font-sans">
          Your next phone
          <br />
          <span className="text-[#4d3b69]">Your best phone</span>
        </h1>
        <p className="text-justify my-4 pl-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          tenetur molestias quo consequuntur dolore laborum nihil, esse itaque
          odio fuga!
        </p>
        <button className="bg-teal-200 p-3 rounded-xl font-bold mx-auto text-[#c94ced] ">
          Live Demo
        </button>
      </div>
      <div className="flex items-center">
        <img
          src="https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/INLOGG733W_logitech_g733_wireless_headset_white.jpg"
          alt="headset"
        />
      </div>
    </div>
  );
};

export default Home;
