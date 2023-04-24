import { ref } from 'vue'

const getPortfolio = () => {
  const state = ref([
    {
      id: 1,
      title: "Dreams",
      description: "1 semester projoktet i faget web development. Jeg fik jeg til opgave at lave en XD prototype og kode en funktionel forside i HTML CSS og bruge frameworket boostrap. Jeg valgte selv at opdigte et hudpleje brand som jeg kaldte DREAMS, jeg både har lavet logo og produkter til websitet.",
      category: "Web",
      image: "../src/assets/billeder/Dreams-logo.jpg",
      imageTwo: "../src/assets/billeder/dreams-lotion.jpg",
      imageThree: "../src/assets/billeder/mockup-pc-dreams.jpg",
      link: "https://www.google.com",
      github: "https://github.com/JeJulianaa/JeJulianaa.github.io",
      tech: "Boostrap, HTML, CSS, Photoshop, illustrator",
      dato: "2021-23-11",
      completed: true,
      complete: "complete"
    },
    {
      id: 2,
      title: "Cup Noodles Promotion",
      description: "Projekt opgave i forbindelse med min uddannelse. Min Gruppe og jeg har lavet en nudel reklame film som er målrettet til unge mennesker. Videoen er optaget i formatet 16:9 da den er til sociale medier som tiktok, instagram. du kan se video ved at klikke på YouTube linket.",
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
      description: "Projekt uge: city brande Esbjerg. Jeg og min gruppe valgte at lave en prototype for en havnefest. der er linket til YouTube video som er en reklame film/ udtryk for hvad vi vil med dette event.",
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
      description: "UX og UI: udarbejdet en prototype af en biograf App. Jeg og min gruppe har udarbejdet app på baggrund af modeller inden for ux faget for at få den mest funktionelle app. Vi har gået med et lilla design da vil gerne vil modernisere Biografer ",
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