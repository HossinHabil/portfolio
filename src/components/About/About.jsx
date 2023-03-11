// import Head from "next/head";
import Image from "next/image";
import about_victor from "../../../assets/about_victor.jpg";
import classes from "./About.module.scss";

import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { fadeIn } from "../utils/motion";

const Project = () => (
  <section id="about" className={classes['about-section']}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={classes['about-container']}
    >
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
        <Image
          src={about_victor}
          alt="about me image"
          width={500}
          height={500}
          priority="true"
          className={classes['about-image']}
        />
      </motion.div>
      <div className={classes['about-details-container']}>
        <motion.h2
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={classes['about-h2']}
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={classes['about-p']}
        >
          Front-End Developer with Almost 2 years of experience using some of
          the most powerful technologies like...
        </motion.p>
        <div className={classes['about-icons-container']}>
          <motion.span variants={fadeIn("left", "tween", 0.2, 1.8)}>
            <RiReactjsFill className={classes['about-span']}/>
          </motion.span>
          <motion.span variants={fadeIn("up", "tween", 0.2, 1.8)}>
            <TbBrandNextjs className={classes['about-span']}/>
          </motion.span>
          <motion.span variants={fadeIn("right", "tween", 0.2, 2.6)}>
            <SiTailwindcss className={classes['about-span']}/>
          </motion.span>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Project;
