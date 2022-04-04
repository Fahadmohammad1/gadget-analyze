import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div key={review.id}>
        <div className=" mx-auto max-w-sm bg-emerald-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10 mt-5">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={review.picture.large}
              alt="Bonnie"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {review.name.first}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              4.5 stars
            </span>
            <div>
              <p>{review.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
