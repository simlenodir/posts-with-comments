import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./posts.css";

export const Posts = () => {
  const [posts, setPosts] = useState({
    data: [],
    leader: true,
    error: null,
  });
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (res.ok) {
        return setPosts({
          loader: false,
          data,
          error: null,
        });
      }
      console.error({ status: res.status, message: res.statusText });
    })();
  }, []);

  return (
    <div className="container">
      {posts.data.length > 0 && (
        <ul className="d-flex  flex-column">
          {posts.data.map((post) => {
            return (
              <li key={post.id}>
                <Link className="posts__linl" to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
