import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data.results));
  }, []);
  return (
    <div className="md:grid grid-cols-3 mt-5 gap-y-5">
      {reviews.map((review) => (
        <Review review={review} key={review.id}></Review>
      ))}
    </div>
  );
};

export default Reviews;
