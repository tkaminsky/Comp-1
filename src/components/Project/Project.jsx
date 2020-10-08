import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Link
      className="project-background"
      to={{ pathname: props.link }}
      target="_blank"
    >
      <div className="project-info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
