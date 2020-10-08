import React, { useState } from "react";
import "./About.css";
import CutePic from "../../assets/ProfilePic.jpeg";
import Sibs from "../../assets/Siblings.jpeg";
import Sunset from "../../assets/Sunset.jpeg";
import Inty from "../../assets/AboutInty.png";
import Wheat from "../../assets/Wheat.jpeg";

function ExpandableItem(props) {
  return (
    <div 
      onMouseEnter={() => {
        props.setActiveBullet(props.bullet);
        props.setActivePicture(props.pic);
      }}
      onMouseLeave={() => {
        props.setActiveBullet("");
        props.setActivePicture(CutePic);
      }}
      >
      <li>{props.bullet}</li>
      {
        props.activeBullet === props.bullet ? (<div style={{color: "red"}}>{props.moreDescription}</div>) : ("")
      }
    </div>

  )
}

export default function AboutScreen() {
  const [activeBullet, setActiveBullet] = useState("");
  const [activePicture, setActivePicture] = useState(CutePic);

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={activePicture} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>
            Limited ability.
            <br></br>
            Unlimited enthusiasm.
            </h1>
          <h2>Harvard University, '24</h2>
          <p>Hello, and welcome to my website. You might be asking yourself, "Who is this person? Why do they have a website?"
            Those are both very good questions, though sadly they aren't questions that I can answer. Who is anyone, really? And
            what even <em>is</em> a website? It's impossible to say. Still, here are some basic facts about me:
          </p>
          <ul>
            <ExpandableItem 
            bullet="I was born and raised in Walla Walla, Washington. (Yes, that is a fun name!)"
            setActiveBullet={setActiveBullet}
            activeBullet={activeBullet}
            moreDescription="Here's some wheat. We love wheat in Walla Walla."
            setActivePicture={setActivePicture}
            pic={Wheat}
            />
            <br></br>
            <ExpandableItem bullet="I'm the youngest of three siblings, but I wasn't bullied by them because I'm also the tallest." 
            setActiveBullet={setActiveBullet}
            activeBullet={activeBullet}
            setActivePicture={setActivePicture}
            moreDescription="There's my brother Eddie on the left, and my sister Lily in the middle!"
            pic={Sibs}
            />
            <br></br>
            <ExpandableItem bullet="I've been playing the flute for 10 years, which has been about as useful as you'd expect."
            setActiveBullet={setActiveBullet}
            activeBullet={activeBullet}
            setActivePicture={setActivePicture}
            moreDescription="My section having an awesome time in rehearsal in the summer of 2019!"
            pic={Inty}
            />
            <br></br>
            <ExpandableItem bullet="I can write a mean acrostic poem (see Projects)"
            setActiveBullet={setActiveBullet}
            activeBullet={activeBullet}
            setActivePicture={setActivePicture}
            moreDescription="Not a poem, but this picture's pretty cool right!?"
            pic={Sunset}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
