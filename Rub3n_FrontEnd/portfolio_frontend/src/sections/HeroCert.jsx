import React from "react";
import { HeroParallax } from "../components/HeroParallax2";

function HeroCert() {
  const products = [
    {
      title: "Certificate 1",
      link: "#1",
      thumbnail: "../assets/Certificados/1.png",
    },
    {
      title: "Certificate 2",
      link: "#2",
      thumbnail: "../assets/Certificados/2.jpg",
    },
    {
      title: "Certificate 3",
      link: "#3",
      thumbnail: "../assets/Certificados/3.jpg",
    },
    {
      title: "Certificate 4",
      link: "#4",
      thumbnail: "../assets/Certificados/4.jpg",
    },
    {
      title: "Certificate 5",
      link: "#5",
      thumbnail: "../assets/Certificados/5.jpg",
    },
    {
      title: "Certificate 6",
      link: "#6",
      thumbnail: "../assets/Certificados/6.jpg",
    },
    {
      title: "Certificate 7",
      link: "#7",
      thumbnail: "../assets/Certificados/7.jpg",
    },
    {
      title: "Certificate 8",
      link: "#",
      thumbnail: "../assets/Certificados/8.jpg",
    },
    {
      title: "Certificate 9",
      link: "#",
      thumbnail: "../assets/Certificados/9.jpg",
    },
    {
      title: "Certificate 10",
      link: "#",
      thumbnail: "../assets/Certificados/10.jpg",
    },
    {
      title: "Certificate 11",
      link: "#",
      thumbnail: "../assets/Certificados/11.png",
    },
    {
      title: "Certificate 12",
      link: "#",
      thumbnail: "../assets/Certificados/12.jpg",
    },
    {
      title: "Certificate 13",
      link: "#",
      thumbnail: "../assets/Certificados/2.jpg",
    },
    {
      title: "Certificate 14",
      link: "#",
      thumbnail: "../assets/Certificados/6.jpg",
    },
    {
      title: "Certificate 15",
      link: "#",
      thumbnail: "../assets/Certificados/8.jpg",
    },
  ];

  return <HeroParallax products={products} />;
  
}

export default HeroCert;
