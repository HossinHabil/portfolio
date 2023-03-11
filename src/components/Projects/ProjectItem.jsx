import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";

import classes from "./ProjectItem.module.scss";

const ProjectItem = ({
  data: { image, title, description, source, visit },
}) => {
  return (
    <div className={classes['portfolio-Content']}>
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        priority="true"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          transition: "transform 0.5s",
        }}
        className="cursor-pointer object-contain rounded-xl m-auto"
      />
      <div className={classes.layer}>
        <h5 className={classes['layer-h5']}>
          {title}
        </h5>
        <p className={classes['layer-desc']}>{description}</p>
        <div className={classes['icons-container']}>
          <Link href={source} target="_blank">
            <AiFillGithub className={classes.icon} />
          </Link>
          <Link href={visit} target="_blank">
            <IoRocketOutline className={classes.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
