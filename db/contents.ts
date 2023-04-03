export interface IItem {
  title: string;
  image: string;
  id: number;
  description?: string;
}

export const listTopics: IItem[] = [
  {
    title: "Set up Next JS",
    image: "next",
    id: 1,
    description: "Talks about the Basics of Setting up a NextJS project"
  },
  {
    title: "Definitions of folders",
    image: "01n",
    id: 2,
    description: "This explains the folder structure of NextJS such as the pages folder and others."
  },
  {
    title: "Next JS Prerendering and Types",
    image: "02d",
    id: 3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Static Prerendering",
    image: "03d",
    id: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  },
  {
    title: "one",
    image: "10n",
    id: 5,
  },
  {
    title: "fish",
    image: "11d",
    id: 6,
  },
];
