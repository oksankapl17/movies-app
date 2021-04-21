import React, { useState } from "react";
import StarRatings from "react-star-ratings";

export const StarsRating = ({ rating }) => {
  const [stateRating, setRating] = useState(rating);

  return (
    <StarRatings
      rating={stateRating}
      starRatedColor="blue"
      changeRating={setRating}
      numberOfStars={10}
      name="rating"
      starDimension="15px"
    />
  );
};
