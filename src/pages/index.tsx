import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = styled.h1`
  color: black;
  font-size: 40px;
  text-align: center;
`;
const SubHeader = styled.h2`
  color: black;
  font-size: 30px;
`;
const Item = styled.h2`
  display: flex;
  > img {
    height: 40px;
    width: 40px;
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

const Main = styled.div`
  margin: auto;
  padding: 35px;
`;

const list = [
  {
    title: "one",
    image: "vercel.svg",
    id: 1,
  },
  {
    title: "one",
    image: "vercel.svg",
    id: 2,
  },
  {
    title: "one",
    image: "vercel.svg",
    id: 3,
  },
  {
    title: "one",
    image: "vercel.svg",
    id: 4,
  },
  {
    title: "one",
    image: "vercel.svg",
    id: 5,
  },
];

const Home = function () {
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
          {list.map((item) => (
            <Link href={`contents/${item.id}`}key={item.id}>
              <Item><span style={{marginRight: "9px"}}>{item.id}</span><img src={`./vercel.svg`} alt="" /><span>{item.title}</span></Item>
            </Link>
          ))}
        </List>
      </Main>
    </div>
  );
};

export default Home;
