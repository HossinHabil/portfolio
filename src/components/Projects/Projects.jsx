import React from "react";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { fadeIn } from "../utils/motion";

import { projects } from "../constants/constants";
import ProjectItem from "./ProjectItem";
import classes from "./Project.module.scss";

const Projects = () => {
  return (
    <section id="tech" className={classes['project-section']}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="main-text"
      >
        <motion.h2
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={classes['project-container-h2']}
        >
          My Latest Projects
        </motion.h2>
        <motion.p
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={classes['project-container-p']}
        >
          Some of the projects I've worked on
        </motion.p>
      </motion.div>
      <div className={classes['projects-items-container']}>
        {projects.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
