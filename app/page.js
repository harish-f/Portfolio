"use client"

import Projects from "@/components/sections/Projects";
import Intro from "@/components/sections/Intro";
import Header from "@/components/sections/Header";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";

// const projects = [
//   {
//     title: "MentalStop",
//     description: "MentalStop is a project I did in Sec 3 as part of project serve within SST Inc, a talent development program in SST. Using the ReactJS framework, we built a website that helped increase awareness about certain mental health issues and also give users more insight into their mental health through an online diary that uses AI and linear regression to evaluate and identify trends in the users mental health.",
//     imageLink: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg",
//     links: [
//       {
//         icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
//         redirect: "https://github.com/SeansC12/mentalstop",
//       },
//       {
//         icon: "https://cdn-icons-png.flaticon.com/512/3128/3128307.png",
//         redirect: "https://www.youtube.com/watch?v=pHCNh8KWol4",
//       },
//     ],
//   },
//   {
//     title: "ISS",
//     description: "In sec2, I had designed and carried out an investigative research project with 2 of my peers. We decided to investigate the RESEARCH QUESTION. Our project was sent to several competitions and won several awards such as the bronze award at a star smth comp and best presentation award at Opportunity X science fair.",
//     imageLink: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg",
//     links: [
//       {
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124036.png",
//         redirect: "https://vimeo.com/687028804",
//       },
//     ],
//   },
//   {
//     title: "Tesla Coil",
//     description: "This was a personal project of mine that I embarked on in secondary 1. I had initially just been fascinated by videos I watched on YouTube about high voltage electricity. However, this initial curiosity turned into a obsession of mine and I delved into the Science behind how high voltage is generated. I made my first Tesla coil at the end of P6. However it was barely functioning and incredibly low powered. This set me off on a path to make a better and more powerful tesla coil which eventually led to me making my second Tesla coil.",
//     imageLink: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg",
//     links: [
//       {
//         icon: "https://cdn-icons-png.flaticon.com/512/124/124036.png",
//         redirect: "https://vimeo.com/687028804",
//       },
//     ],
//   },

// ]

const achievements = [
  {
    title: "",
    description: "",
  }
]

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Header />
        <Intro />
      </div>
      <Skills />
      <Projects />
      <Achievements />
    </main>
  );
}
