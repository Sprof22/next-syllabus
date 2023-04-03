import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import NextLogo from "./../../public/nextlogo.json";
import ReactLogo from "./../../public/react.json";
import Lottie from "lottie-react";
import {IItem, listTopics} from '../../db/contents'
import Image from "next/image";





export const Header = styled.h1`
  color: black;
  font-size: 40px;
  text-align: center;
  text-decoration: underline;
`;
export const SubHeader = styled.h2`
  color: black;
  font-size: 30px;
`;
const Item = styled.h2`
  display: flex;
  height: 40px;
  line-height: 40px;
  gap: 20px;
  > img {
    margin-right: 10px;
  }
`;
const List = styled.h2`
  color: black;
  font-size: 30px;
  > li {
    display: flex;
    margin-bottom: 4px;
  }
`;

export const Main = styled.div`
  margin: auto;
  padding: 35px;
`;

interface HomeProps {
  contents: IItem[]
} 



const Home = function ({contents}: HomeProps) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div>
      <Head>
        <title>Next Syllabus</title>
      </Head>
      <Main>
        <Header>Welcome to NextJS Syllabus</Header>
        <SubHeader>Contents</SubHeader>
        <List>
          {contents.map((item) => (
            <Link href={`contents/${item.id}`} key={item.id}>
              <Item>
                <span style={{ marginRight: "9px" }}>{item.id}</span>
                <Image
                src={`/icons/${item.image}.png`}
                alt={`${item.title}`}
                width={50}
                height={50}
              />
                <span>{item.title}</span>
              </Item>
            </Link>
          ))}
        </List>
      </Main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(){

  const contents = [...listTopics]
  return {props: {contents}}
}
