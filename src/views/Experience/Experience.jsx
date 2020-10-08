import React, { useState } from "react";
import "./Experience.css";
import Pic1 from "../../assets/WallaWalla.JPG";
import Pic2 from "../../assets/Interlochen.jpg";
import Pic3 from "../../assets/Harvard.jpeg";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
        props.setActivePicture(props.picture);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("Walla Walla High School");
  const [activeDescription, setActiveDescription] = useState(`Nestled in the lush, green armpit of the Walla Walla Valley,
    Wa-Hi gave me my first exposure to so much, including the first two Computer Science
    classes that I'd ever taken. I spent my first three years of high school at Wa-Hi, and my first 17 years in Walla Walla.
    Particularly well-known for it's wine country, community college, 
    and state penetentiary, what it lacked in polish it more than made up for in country drives and those sweet, sweet onions.`);
  const [activePicture, setActivePicture] = useState(Pic1);

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Walla Walla High School"
            description="Nestled in the lush, green armpit of the Walla Walla Valley,
             Wa-Hi gave me my first exposure to so much, including the first two Computer Science
             classes that I'd ever taken. I spent my first three years of high school at Wa-Hi, and my first 17 years in Walla Walla.
              Particularly well-known for it's wine country, community college, 
             and state penetentiary, what it lacked in polish it more than made up for in country drives and those sweet, sweet onions."
             picture={Pic1}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setActivePicture={setActivePicture}
          />
          
          <TimeLineItem
            title="Interlochen Arts Academy"
            description="Shockingly enough, this arts school does indeed lie between two lakes. Still, despite this close proximity to no less than two bodies of water, 
            I have never gone swimming in either lake. Instead, I spent the bulk of the 2019-2020 school year in several basements at a boarding school in the middle of the forest,
            where I tried to be able to play the flute very quickly. Results were mixed, but it was a very enjoyable experience."
            picture={Pic2}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setActivePicture={setActivePicture}
          />

          <TimeLineItem
            title="Harvard College"
            description="Here's where I am going to school RIGHT NOW! It's hard to say what this experience is going to be like for me, 
            but right now I can say that it heavily features beautiful nightlife, including rats, racoons, and turkey. I dream that one day,
            alone in an alley at four in the morning, I might stumble upon a fabled Rat King. If that ends up happening, I will immediately 
            document the experience on this website, so please, keep an eye out!"
            picture={Pic3}
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
            setActivePicture={setActivePicture}
          />  
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
          <img src={activePicture} className="highlight-picture"/>
        </div>
      </div>
    </div>
  );
}
