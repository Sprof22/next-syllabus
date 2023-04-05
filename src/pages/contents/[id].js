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
  background: #f6f6f6;
  border-radius: 5px;
  padding: 16px;

  > div {
    &: nth-of-type(1) {
      display: grid;
      grid-template-columns: 100%;
      align-items: center;
    }
    &: nth-of-type(2) {
      display: flex;
      align-items: center;
    }
  }
`;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: blue;
    font-size: 50px;
  }
`

const NavPageButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

const Contents = ({ content, length }) => {
  const router = useRouter();
  const productID = Number(router.query.id);
  const nextId = productID +1;
  const prevId = productID -1;

  console.log(length, "this is the length")
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
            {content.description ? (
              <div>{content.description}</div>
            ) : (
              <div>
                <h2>No description</h2>
                <img src={`/icons/${content.image}.png`} />
              </div>
            )}
          </CourseDetails>
        </div>
      </Main>
      {content.background ? (
        <Background>
          <Image
            src={`/background/${content.background}.png`}
            alt={`${content.title}`}
            width={700}
            height={700}
          />
        </Background>
      ) : (
        <Background>
          <h2>No Background Image</h2>
        </Background>
      )}
      <Main>
      <NavPageButtons>
      {nextId === 1 ? <button disabled>Prev Page</button>: <Link href={`/contents/${prevId}`}>
        <button disabled>Prev Page</button>
      </Link>}
      {nextId === length ? <button disabled>Next Page</button> :<Link href={`/contents/${nextId}`}>
        <button>Next Page</button>
      </Link>}
      </NavPageButtons>
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
  const length = contents.length;
  return { props: { content, length } };
}