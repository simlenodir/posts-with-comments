import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Minmodal } from "../../modal";
import "./single.css";
export const SinglePage = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const { id, postId } = useParams();
  const [post, setPost] = useState([]);
  // const [comid, setComId] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (res.ok) {
        return setPost(await res.json());
      }
    })();
  }, [postId]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      if (res.ok) {
        return setComments(await res.json());
      }
    })();
  }, [postId]);
  return (
    <div className=" full pb-3 container d-flex justify-content-center flex-column align-items-center ">
      <div className="card w-75 p-0 ">
        <div className="card-header ">
          <h5 className="card-title w-100">{post.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{post.body}</p>
          <button
            id={post.id}
            onClick={setOpen.bind(null, true)}
            className="btn btn-outline-primary"
          >
            comments
          </button>
          <Minmodal title={post.title} modal={open} setModal={setOpen}>
            {comments.map((comment) => {
              return <p>{comment.name}</p>;
            })}
          </Minmodal>
          {/* <Link to={`/comments/${postId}`}> comments</Link> */}
        </div>
      </div>
      <button
        className="btn btn-outline-secondary mt-4"
        onClick={() => navigate("/posts")}
      >
        {" "}
        back
      </button>
    </div>
  );
};
