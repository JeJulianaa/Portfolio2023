import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: 1,
      title: "Dreams",
      description: "This is my portfolio",
      category: "Web",
      image: "../src/assets/billeder/Dreams-logo.jpg",
      imageTwo: "../src/assets/billeder/dreams-lotion.jpg",
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: true,
      complete: "complete"
    },
    {
      id: 2,
      title: "Cup Noodles Promotion",
      description: "Projekt opgave i forbindelse med min uddanelse",
      category: "Video",
      image: "../src/assets/billeder/noodles-promotion.jpg",
      imageTwo: "../src/assets/billeder/mockupNoodlesVideo.jpg",
      yt: "https://youtube.com/shorts/JON6C0CkUfc?feature=share",
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: 3,
      title: "Beyond Esbjerg",
      description: "Projekt uge, hvor vi skulle city brande Esbjerg",
      category: "Video",
      image: "../src/assets/billeder/beyondesbjerg-logoo.jpg",
      imageTwo: "../src/assets/billeder/Mockup-Mobil-BeyondEsbjerg.jpg",
      imageThree: "../src/assets/billeder/eventoversigt-beyond.jpg",
      link: "https://www.google.com",
      yt: "https://youtu.be/2rUKgN9EEGM",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: 4,
      title: "BioVers",
      description: "UX og UI: udarbejdet en prototype af en biograf App ",
      category: "UX/UI",
      image: "../src/assets/billeder/bioversMockupmobil.jpg",
      imageTwo: "../src/assets/billeder/Biovers-menu.jpg",
      
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      gruppe:"Anne-sofie,Dream og Tanya",
      date: "2021-03-21",
      completed: false,
      complete: "incomplete"
    },
    {
      id: 5,
      title: "LongHorn BBQ Projekt",
      description: "UX og UI: udarbejdet en prototype af en biograf App ",
      category: "Web",
      image: "../src/assets/billeder/longhornMockup.jpg",
      imageTwo: "../src/assets/billeder/longhornLogo.jpg",
      
      link: "https://www.google.com",
      github: "https://www.google.com",
      tech: "Vue, Tailwind, Node, Express, MongoDB",
      gruppe:"Anne-sofie,Dream og Tanya",
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