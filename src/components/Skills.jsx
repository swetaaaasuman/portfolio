import React, { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      dusration: 2,
      staggerChildren: 0.5,
    },
  },
};
const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am a keen learner,curious to learn new things <br /> and focus on
          expanding my knowledge
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt=""></img>
          <h1>
            My&nbsp;<motion.b whileHover={{ color: "orange" }}>Skills</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            So <motion.b whileHover={{ color: "orange" }}>Far</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Languages</h2>
          <br />
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frameworks and Libraries</h2>
          <br />
          <ul>
            <li>ReactJs</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>DaisyUI</li>
            <li>React-Toastify</li>
            <li>SCSS</li>
          </ul>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Developer Tools</h2>
          <br />
          <ul>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>Vite</li>
          </ul>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backened Technology</h2>
          <br />
          <ul>
            <li>FireBase</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
