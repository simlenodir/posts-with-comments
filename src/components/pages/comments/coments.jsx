import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Comments = () => {
  const params = useParams();
  const [comments, setComments] = useState();

  return (
    <div className="container">
      <h2>Comments page</h2>
    </div>
  );
};
