import Link from "next/link";
import { useRouter } from "next/router";

function Product({products}) {
  const router = useRouter();
  return <><h1>List of products</h1>
  {products.map(product => {
    return (
        <Link href={`/products/${product.id}`} key={product.id}>
            <h2>{product.id} {product.title} {product.price}</h2>
            <hr/>
        </Link>
    )
  })}
  </>;
}

export default Product;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3004/products");
  const data = await response.json();
  
  return {
    props: {
        products: data 
    }
  }
}
