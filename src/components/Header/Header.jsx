import React from "react";
import Link from "next/link";
import hero_img from "../../../assets/hero_img.jpg";
import classes from "./Header.module.scss";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCodepenCircle,
} from "react-icons/ai";

import { motion } from "framer-motion";
import { headerVariants, staggerContainer } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const Header = () => {
  return (
    <motion.section
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classes['header-main-container']}
    >
      <motion.nav
        variants={headerVariants}
        className={classes['header-nav']}
      >
        <h1 className={classes['header-h1']}>
          <AiOutlineCodepenCircle />
        </h1>
        <ul className={classes['header-ul']}>
          <li>
            <a
              className={classes['header-cv']}
              href="hossin-habil-CV.pdf"
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.nav>
      <div className={classes['header-container']}>
        <div>
          <motion.h2
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={classes['header-details-container-h2']}
          >
            Hossin Habil
          </motion.h2>
          <motion.h3
            variants={fadeIn("left", "tween", 0.2, 1)}
            className={classes['header-details-container-h3']}
          >
            Front-End Web Developer
          </motion.h3>
          <div className={classes['header-details-container-social']}>
            <Link
              href="https://www.linkedin.com/in/hossin-habil-183866121/"
              target="_blank"
            >
              <AiFillLinkedin className={classes['header-details-container-social-icon']} />
            </Link>
            <Link href="https://github.com/HossinHabil" target="_blank">
              <AiFillGithub className={classes['header-details-container-social-icon']} />
            </Link>
          </div>
        </div>
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <Image
            src={hero_img}
            alt="Hero Image"
            width={500}
            height={500}
            priority="true"
            className={classes['header-details-container-image']}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Header;
