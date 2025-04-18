import React, { useRef } from "react";
import "./Internship.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Experience = () => {
  const containerRef = useRef();
  const itemRef = useRef();

  const { scrollYProgress: containerScrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: itemScrollY } = useScroll({ target: itemRef });
  const scaleX = useSpring(containerScrollY, { stiffness: 100, damping: 30 });

  // Adjust the y-axis transformation to reduce excessive vertical movement
  const y = useTransform(itemScrollY, [0, 1], [0, 20]);

  return (
    <div className="experience" ref={containerRef}>
      {/* <div className="progress">
        <h1>Internship Experience</h1>
        <motion.div style={{ scaleX }} className="progressBar" />
      </div> */}
      <section>
        <div className="container">
          <div className="wrapper" ref={itemRef}>
            <motion.div className="textContainer" style={{ y }}>
              <h4>Digital Engineer Intern at TVS Motor Company</h4>
              <span className="duration">Bangalore (Aug 2024 – Dec 2024)</span>
              <p>
              I actively engaged in full-stack development, resolving bugs, and ensuring a seamless transition with Angular, .NET Web API 2.0, SQL, and TypeScript for API development, UI design, and database integration.
              </p>

              {/* Role Played / Contribution Section */}
              <div className="role-contribution">
                <h5>Contribution</h5>
                <p>
                  I worked closely with the team to identify, debug, and resolve issues in various screens of the application.
                  I contributed to the enhancement of the system and ensured smooth functionality by writing SQL queries, working on ASP.NET MVC modules, and
                  collaborating in a team-driven development environment using Agile methodologies.
                </p>
              </div>
                {/* Key Learnings Section */}
                <div className="key-learnings">
                <h5>Key Learnings</h5>
                <ul>
                  <li>Understanding of ASP.NET MVC and Angular framework.</li>
                  <li>Hands-on experience with SQL Server and database management.</li>
                  <li>Exposure to Agile Scrum practices and working in a cross-functional team.</li>
                  <li>Debugging and resolving production bugs in real-time.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
