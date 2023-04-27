export interface IItem {
  title: string;
  image?: string;
  id: number;
  description?: string;
  background?: string;
}

export const listTopics: IItem[] = [
  {
    title: "Introduction To NEXTJs",
    description: "Why next JS, Definition of folders",
    id: 1,
    image: "next",
    background: "next1",
  },
  {
    title: "Routing",
    description:
      "file based routing, nested routes, dynamic pages, navigating programmatically, catch all routes, optional catch all routes",
    id: 2,
    image: "01n",
    background: "productroute",
  },
  {
    title: "Introduction to preRendering / Static Site Generation(SSG)",
    description:
      "Difference between React and NextJS(PreRendering): What and Why of Prerendering, Static Generation without and with data, Pages vs Components",
    id: 3,
    image: "02n",
    background: "linkComponent",
  },
  {
    title: "More on getStaticProps()",
    description:
      "Inspecting and running SSG builds, SSG with dynamic parameters",
    id: 4,
    image: "02n",
    background: "linkComponent",
  },
  {
    title: "Get Static Paths",
    description: " fallback: false, true and 'blocking'",
    id: 5,
    image: "03d",
    background: "fallback",
  },
  {
      title: "Incremental Static Regeneration",
      image: "03d",
      id: 6,
      description: "Issues with SSG,  What (html is generated at build time ), When and How of SSR, How does it difer from SG, and when to use one over the other, Inspecting ISR builds",
      background: "isrneed",
    },
  {
    title: "Server Sider Rendering",
    description: "Issues with SSG, SSR with getServerSideProps, SSR with dynamic parameters, context,",
    id: 7,
    image: "03d",
    background: "ssg",
  },
  {
    title: "Client Sider Rendering",
    description: "useEffect, UseSWR, PreRendering + CSR, SUMMARY",
    id: 8,
    image: "03d",
    background: "ssg",
  },
  {
    title: "API Routes",
    description: "Intro, API routing, GET request, Post Request",
    id: 9,
    image: "03d",
    background: "ssg",
  },
  {
    title: "API cont",
    description: "Dynamic API Routers, Delete Request, Catch all routes, APIs and PreRendering, API SUMMARY",
    id: 10,
    image: "03d",
    background: "ssg",
  }
];
