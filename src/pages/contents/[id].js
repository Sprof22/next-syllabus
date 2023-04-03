import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { listTopics } from "../../../db/contents";
import { Main, Header } from "../index";
import Image from "next/image";

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
  }

`;

const Contents = ({ content }) => {
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
            <div>{content.description}</div>
          </CourseDetails>
        </div>
      </Main>
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
