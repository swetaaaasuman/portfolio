import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "Functional Myntra Clone",
    img: "/myntra.png",
    desc: "This project aims to replicate the design and functionality of the popular online fashion shopping website, Myntra. This responsive clone includes updating, adding, deleting items of shopping cart, modification in product price with respect to discount and convenient fee, etc. This project includes usage of mock data or static JSON files to simulate product data and user interactions without the need for backend server",
    url: "https://clone-livid-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Martial Arts Tournament Management Software",
    img: "/tournament.png",
    desc: "Developed a comprehensive martial arts tournament management software to streamline event operations.Developed a software application to streamline the management Of martial arts tournaments including online registration of participants,and other related activities",
    url: "https://martial-arts-tournament-software.vercel.app/",
  },
  {
    id: 3,
    title: "Social Media Platform",
    img: "/blog.png",
    desc: "A platform where we can write brief blogs,tag some relevant words and showcase no.of reactions recieved",
    url: "https://social-media-blog.netlify.app/",
  },
  {
    id: 4,
    title: "An Ecommerce Website - Front End",
    img: "/com.png",
    desc: "",
    url: "https://dressuppage.netlify.app/",
  },
  {
    id: 5,
    title: "Report on Tooth detection in panoramic radiographs",
    img: "/teeth.png",
    desc: "Used ML algorithm to segment and find region of interest in dental X-rays.This project facilitates image analysis and potentially aids in dental diagnostics",
    url: "https://drive.google.com/file/d/15iO-VAqhc-1T-xQB_gGDeLmK6FqExRCj/view?usp=sharing",
  },
  {
    id: 6,
    title: "Login/Register Authorisation",
    img: "/firebase.png",
    desc: "A ReactJs login/registration form with Firebase Authentication,integrated Firebase in the React JS application to do Register, login, getting the user details and staying logged in until logout button is present,two services of firebase has been used:Authentication and Firestore",
    url: "https://firebaseloginauth.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleButtonClick = () => {
    // Redirect to the URL when the button is clicked
    window.location.href = item.url;
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""></img>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button onClick={handleButtonClick}>Check</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
