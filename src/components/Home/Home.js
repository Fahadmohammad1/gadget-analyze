import React from "react";
import useReviews from "../../Hooks/useReviews";

const Home = () => {
  const [reveiws] = useReviews();
  return (
    <div>
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
      <h1 className="text-3xl mt-10 font-bold font-serif">
        Customer Reviews(3)
      </h1>
      <div className="md:grid grid-cols-3 mt-8">
        {reveiws.slice(0, 3).map((review) => (
          <div key={review.id}>
            <div className="mb-5 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10 mt-5">
                <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src={review.picture.large}
                  alt="Bonnie"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {review.name.title} {review.name.first}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  4.5 stars
                </span>
                <div>
                  <p>this is description</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
