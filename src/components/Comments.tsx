import { Button, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Comments = () => {
  const [comments, setComments] = useState<Comment[]>();
  const [count, setCount] = useState(1);

  const URL = `https://jsonplaceholder.typicode.com/comments?_page=${count}&limit=10`;

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setComments(data);
    };
    getComments();
  }, [count]);

  return (
    <div>
      <h1>Comments</h1>
      {comments &&
        comments.map(({ id, name, email, body }) => (
          <div key={id}>
            <p> {name}</p>
            <p> {email}</p>
            <p>{body}</p>
          </div>
        ))}
      <Pagination
        count={10}
        shape="rounded"
        onChange={(_, page) => setCount(page)}
      />
    </div>
  );
};
