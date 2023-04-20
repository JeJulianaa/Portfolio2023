import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: 1,
      title: "Portfolio",
      description: "This is my portfolio",
      category: "Web",
      image: "../src/assets/billeder/alberte-billede-home.jpg",
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: true,
      complete: "complete"
    },
    {
      id: 2,
      title: "Portfolio 2",
      description: "This is my portfolio 2",
      category: "Video",
      image: "https://placehold.jp/150x150.png",
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: 3,
      title: "Portfolio 3",
      description: "This is my portfolio 3",
      category: "Video",
      image: "https://placehold.jp/150x150.png",
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: 4,
      title: "Portfolio 3",
      description: "This is my portfolio 3",
      category: "Photoshop",
      image: "https://placehold.jp/150x150.png",
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    }
  ])

  return {
    state,
  }
}

export default getPortfolio