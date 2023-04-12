import React from "react";
import { PostProps } from "./index";
interface IContext {
  params: {
    postId: number;
  };
}

interface PostsProps {
  posts: {
    title: string;
     body: string;
     id: number;

  }

}
const Post = ({posts}: PostsProps) => {
  return <>
    <h1>{posts.title}</h1>
    <p>{posts.body}</p>
  </>;
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch ('https://dummyjson.com/posts');
    const data = await response.json();
    console.log(data, "this Sprof22");

    // const paths= data.posts.map(post => {
    //   return {
    //     params: {postId: `${post.id}`}
    //   }
    // })
  return {
   paths: [{
    params: {postId: "1"}
   },
   {
    params: {postId: "2"}
   },
   {
    params: {postId: "3"}
   },
   {
    params: {postId: "4"}
   },
  ],
    fallback: false,
  };
}

export async function getStaticProps(context: IContext) {
  const { params } = context;
  console.log(params, "this them params")
  const response = await fetch(`https://dummyjson.com/posts/${params.postId}`);
  const data = await response.json();
  
  return {
    props: { posts: data}
  };
}
