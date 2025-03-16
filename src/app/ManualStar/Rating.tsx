import { useParams } from "react-router-dom";
import StarRating from "../AllRating/Star";

function Rating() {
  const { id } = useParams();

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Product {id}</h2>
      <p className="text-gray-600">Set Your Rating:</p>
      <StarRating interactive={true} />
    </div>
  );
}

export default Rating;
