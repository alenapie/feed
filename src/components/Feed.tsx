import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Feed = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(URL);
      const posts = await response.json();
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {posts &&
        posts.map(({ id, title, body }) => (
          <div key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </div>
        ))}
    </div>
  );
};
