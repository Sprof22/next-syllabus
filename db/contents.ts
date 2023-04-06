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
    background: "productroute",
  },
  {
    title: "PreRendering and Data Fetching",
    image: "02d",
    id: 4,
    description:
      "Difference between React and NextJS(PreRendering): What and Why of Prerendering, Static Generation with and with data, Incremental SG, Dynamic Parameters while fetching Data",
  },
  {
    title: "Server Side Rendering",
    image: "03d",
    id: 5,
    description:
      "What (html is generated at build time ), When and How of SSR, How does it difer from SG, and when to use one over the other, Data fetching with SSR(getStaticProps)",
  },
  {
    title: "Client Side Data Fetching",
    image: "03d",
    id: 6,
    description:
      "Combining PreRendering with Client Side Data Fetching",
  },
  {
    title: "one",
    image: "10n",
    id: 6,
  },
  {
    title: "fish",
    image: "11d",
    id: 7,
  },
];
