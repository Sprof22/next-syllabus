import { useRouter } from 'next/router'
import React from 'react'

const ProductDetails = ({product}) => {
    const router = useRouter();

    if(router.isFallback){
      return <div>Loading...</div>
    }
  return (
    <div><h2>{product.productId} {product.title} {product.price}</h2>
    <hr/><p>{product.description}</p></div>
  )
}

export default ProductDetails

export async function getStaticProps(context){
  const {params} = context
  const response = await fetch(`http://localhost:3004/products/${params.productId}`);
  const data = await response.json()

  return {
    props: {
      product: data
    }
  }

}

export async function getStaticPaths(){
  const response = await fetch("http://localhost:3004/products");
  const data = await response.json();
  return{
    paths: [{params: {productId : "1"}}],
    fallback: true,
  }
} 