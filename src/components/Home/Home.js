import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import image from ".//../../images/headset.jpg";

const Home = () => {
  const [reveiws] = useReviews();
  return (
    <div>
      <div className="md:flex justify-center items-center mt-8 px-2 mx-auto">
        <div className="flex flex-col justify-center md:w-1/2 text-left md:pl-7">
          <h1 className="text-7xl font-extrabold font-sans">
            Get Your Favorite
            <br />
            <span className="text-[#4d3b69]">Gaming Headset</span>
          </h1>
          <p className="text-justify my-4 font-medium pl-2">
            Our RM809 is the best selling Headset in this year. We suggest our
            customer to buy this headset.It has active noise cancelation and a
            dedicated best quality mic. Ultra boost sound quality for gamers.
            You can check our <span className="">customer reveiw</span> below.
          </p>
          <div className="cursor-pointer inline-flex w-1/4  items-center justify-center mb-5 mr-2 overflow-hidden text-lg font-medium text-[#c94ced] rounded-lg group bg-gradient-to-br from-emerald-200 to-emerald-400 group-hover:from-emerald-200 group-hover:to-emerald-200 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 border-2 border-emerald-300  ">
            <span className="relative w-full text-center px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
              Explore
            </span>
          </div>
        </div>
        <div className="flex items-center md:w-1/2">
          <img src={image} alt="headset" />
        </div>
      </div>
      <h1 className="text-3xl mt-10 font-bold font-serif">
        Customer Reviews(3)
      </h1>
      <div className="md:grid grid-cols-3 mt-8">
        {reveiws.slice(0, 3).map((review) => (
          <div key={review.id}>
            <div className="mb-5 mx-auto max-w-sm bg-emerald-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 border-b-2 border-b-teal-400">
              <div className="flex flex-col items-center pb-10 mt-5">
                <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src={review.picture.large}
                  alt="Bonnie"
                />
                <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                  {review.name.title} {review.name.first}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <Rating
                    initialRating={4.5}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={
                      <FontAwesomeIcon
                        style={{ color: "goldenrod" }}
                        icon={faStar}
                      />
                    }
                    readonly
                  ></Rating>
                </span>
                <div>
                  <p className="text-gray-800 font-medium">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative inline-flex items-center justify-center p-0.5 mb-7 mr-2 overflow-hidden text-sm font-medium text-[#c94ced] rounded-lg group bg-gradient-to-br from-emerald-200 to-emerald-500 group-hover:from-emerald-200 group-hover:to-emerald-200 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <NavLink
          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold"
          to="/allreviews"
        >
          See All Reviews
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
