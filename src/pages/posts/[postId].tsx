import React from "react";
interface IContext {
  params: {
    postId: number;
  };
}
const Post = () => {
  return <div>Post</div>;
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: IContext) {
  const { params } = context;
  const response = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  const data = await response.json();
  console.log(data, "this is data");
  return {
    props: { posts: data }, // will be passed to the page component as props
  };
}
