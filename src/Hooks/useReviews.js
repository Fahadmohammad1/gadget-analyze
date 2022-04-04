import { useEffect, useState } from "react";

const useReviews = () => {
  const [reveiws, setReviews] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data.results));
  }, []);
  return [reveiws, setReviews];
};
export default useReviews;
