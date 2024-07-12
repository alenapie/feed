import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/comments?_limit=20";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Comments = () => {
  const [comments, setComments] = useState<Comment[]>();

  const getComments = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setComments(data);
  };

  //   useEffect(() => {
  //     const getComments = async () => {
  //       const response = await fetch(URL);
  //       const data = await response.json();
  //       setComments(data);
  //     };
  //     getComments();
  //   }, []);

  return (
    <div>
      <h1>Comments</h1>
      <Button variant="contained" onClick={getComments}>
        Contained
      </Button>
      {comments &&
        comments.map(({ id, name, email, body }) => (
          <div key={id}>
            <p> {name}</p>
            <p> {email}</p>
            <p>{body}</p>
          </div>
        ))}
    </div>
  );
};
