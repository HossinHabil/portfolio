import React from "react";

import { Link } from "react-scroll";

import { motion } from "framer-motion";
import { headerVariants } from "../utils/motion";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiCode } from "react-icons/hi";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <motion.nav
      initial={"hidden"}
      style={{ left: "50%", x: "-50%" }}
      whileInView="show"
      variants={headerVariants}
      viewpost={{ once: false, amount: 0.25 }}
      className={classes.nav}
    >
      <Link
        activeClass={classes.active}
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={100}
      >
        <AiOutlineHome />
      </Link>
      <Link
        activeClass={classes.active}
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={100}
      >
        <AiOutlineUser />
      </Link>
      <Link
        activeClass={classes.active}
        to="tech"
        spy={true}
        smooth={true}
        offset={0}
        duration={100}
      >
        <HiCode />
      </Link>
      <Link
        activeClass={classes.active}
        to="contact"
        spy={true}
        smooth={true}
        offset={10}
        duration={100}
      >
        <BiMessageSquareDetail />
      </Link>
    </motion.nav>
  );
};

export default Navbar;
