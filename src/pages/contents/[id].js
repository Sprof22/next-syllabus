import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { listTopics } from "../../../db/contents";
import { Main, Header } from "../index";
import Image from "next/image";
import { useRouter } from "next/router";

export const CourseDetails = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-gap: 30px;
background: #F6F6F6;
border-radius: 5px;
padding: 16px;

  > div {
    &: nth-of-type(1){
        display: grid;
        grid-template-columns: 100%;
        align-items: center;
    }
    &: nth-of-type(2){
      display: flex;
      align-items: center;
    }
  }

`;

const Background = styled.div`
display: flex;
align-items: center;
justify-content: center;
h2{
  color: blue;
  font-size: 50px;
}
`
const Button = styled.div`
cursor: pointer;
align-items: center;
justify-content: center;
color: red;
font-weight: bold
text-align: center;
margin: 50px;
`

const Contents = ({ content }) => {
  
  const router = useRouter()
  let productID =Number(router.query.id )
  const handleNextClick = () => {
    productID =+ 1;
    console.log(" I was clicked", productID)
  }
  return (
    <div>
      <Head>
        <title>{content.title}</title>
      </Head>
      <div style={{ padding: "30px" }}>
        <Link href="/">Back to Home</Link>
      </div>

      <Main>
        <Header>{content.title}</Header>
        <div>
          <CourseDetails>
            <div>
                
              <Image
                src={`/icons/${content.image}.png`}
                alt={`${content.title}`}
                width={50}
                height={50}
              />
              <div>{content.title}</div>
            </div>
            {content.description? <div>{content.description}</div> : <div><h2>No description</h2><img src={`/icons/${content.image}.png`}/></div>}
          </CourseDetails>
        </div>
        
      </Main>
      {content.background? <Background>
        <Image
                src={`/background/${content.background}.png`}
                alt={`${content.title}`}
                width={700}
                height={700}
              />
        </Background>: <Background><h2>No Background Image</h2></Background>}
        <Button onClick={handleNextClick}>Next Page</Button>
    </div>
  );
};

export default Contents;

export async function getServerSideProps(context) {
  const contents = [...listTopics];
  const content = contents.find(
    (element) => element.id === Number(context.query.id)
  );
  return { props: { content } };
}
