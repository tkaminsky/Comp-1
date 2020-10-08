import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Thomas Kaminsky</h1>
        <div className="info-bar">
          <p className="info-item">tkaminsky@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://www.instagram.com/tommy.kamin/" }}
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.youtube.com/channel/UCNCKO8o9usagtYWf7aNtInw?view_as=subscriber" }}
            target="_blank"
          >
            YouTube
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://open.spotify.com/playlist/0r0PQvoes6ODb1XuxFYDBy?si=61a1B85-QY68LOddARcP7Q" }}
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/media" }}>
            Media
          </Link>
        </div>
      </div>
    </>
  );
}
