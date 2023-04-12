import Link from 'next/link';
import React from 'react'


export interface IPost {
  id: number;
  title: string;
}

export interface PostProps {
  posts: IPost[]
} 

const PostsList = ({posts}: PostProps) => {
  return (
    <>
    <h1>List of Posts</h1>
   {
    posts.map((post) => (
        <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.id}{post.title}</Link>
            <hr/>
        </div>
       
    ))
   }
    </>
  )
}

export default PostsList

export async function getStaticProps() {
    const response = await fetch ('https://dummyjson.com/posts');
    const data = await response.json()
    console.log(data, "this is data")
    return {
      props: {posts:data.posts}, // will be passed to the page component as props
    }
  }