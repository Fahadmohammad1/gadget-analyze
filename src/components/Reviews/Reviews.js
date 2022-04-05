import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div>
      <h1 className="my-5 text-3xl font-sans font-semibold">
        Our Happy Customers Opinion!!!
      </h1>
      <div className="md:grid grid-cols-3 mt-5 gap-y-5">
        {reviews.map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
