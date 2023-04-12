export interface IItem {
  title: string;
  image: string;
  id: number;
  description?: string;
  background?: string;
}

export const listTopics: IItem[] = [
  {
    title: "What is Next JS",
    image: "next",
    id: 1,
    description:
      "The Definition, Why use NextJS, Difference between REACT and NEXTJS, Prerequisites for NextJS,Setting Up NextJS",
    background: "next1",
  },
  {
    title: "Definitions of folders",
    image: "01n",
    id: 2,
    description:
      "This explains the folder structure of NextJS such as the pages folder and others.",
    background: "productroute",
  },
  {
    title: "Routes and Definitions",
    image: "02n",
    id: 3,
    description: "Page Routing example, Dynamic Routing scenarios, catch all routes, Link Components, router.push & router.replace and 404 Page",
    background: "linkComponent",
  },
  {
    title: "PreRendering and Data Fetching Introduction",
    image: "02d",
    id: 4,
    description:
      "Difference between React and NextJS(PreRendering): What and Why of Prerendering, Static Generation without and with data",
      background: "ssg"
  },
  {
    title: "NextJS Production Build",
    image: "03d",
    id: 5,
    description:
      "Static Generation without and with data, Incremental SG, Dynamic Parameters while fetching Data, getStaticPaths",
      background: "getStaticProps"
  },
  {
    title: "Get Static Paths (getStaticPaths ())",
    image: "03d",
    id: 6,
    description:
      "fallback false, fallback true, fallback blocking, Dynamic Parameters while fetching Data, getStaticPaths",
      background: "getStaticProps"
  },

  {
    title: "Server Side Rendering",
    image: "03d",
    id: 7,
    description:
      "What (html is generated at build time ), When and How of SSR, How does it difer from SG, and when to use one over the other, Data fetching with SSR(getStaticProps)",
  },
  {
    title: "Client Side Data Fetching",
    image: "03d",
    id: 8,
    description:
      "Combining PreRendering with Client Side Data Fetching",
  },
  {
    title: "Pages vs Components",
    image: "10n",
    id: 9,
    description: "Difference between Pages and Components"
  },
  {
    title: "fish",
    image: "11d",
    id: 10,
  },
];
