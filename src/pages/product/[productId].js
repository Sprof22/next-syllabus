import { useRouter } from 'next/router'
import React from 'react'

const ProductDetails = () => {
    const router = useRouter();
    const productID = router.query.productId
    console.log(router, "this is the router")
  return (
    <div><h1>Details about product {productID} </h1></div>
  )
}

export default ProductDetails