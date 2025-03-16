import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ defaultRating = 5, interactive = false }) {
  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1 text-yellow-500 text-2xl pt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className="cursor-pointer transition-colors duration-200 "
          color={(hover || rating) >= star ? "#ffc107" : "#e4e5e9"}
          onClick={() => interactive && setRating(star)}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
        />
      ))}
    </div>
  );
}

export default StarRating;
