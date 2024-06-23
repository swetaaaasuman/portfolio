import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sweta Suman
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/instagram.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/linkdin.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
