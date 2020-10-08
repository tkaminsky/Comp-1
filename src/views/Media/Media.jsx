import React, { useState } from "react";
import "./Media.css";
import Vid1 from "../../assets/Videos/Nielsen.mov";
import Vid2 from "../../assets/Videos/Telemann.mov";
import Vid3 from "../../assets/Videos/Gounod.mov";
import Vid4 from "../../assets/Videos/Hoover.mov";
import Vid5 from "../../assets/Videos/KE.mov";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveVid(props.vid);
      }}
    >
      <div className="performance-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function MediaScreen() {
  const [activeTitle, setActiveTitle] = useState("Nielsen Concerto Mvmt. 1");
  const [activeVid, setActiveVid] = useState(Vid4);

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Nielsen Concerto Mvmt. 1"
            description="HARD!"
             vid={Vid1}
            setActiveTitle={setActiveTitle}
            setActiveVid={setActiveVid}
          /> 

          <TimeLineItem
            title="Telemann Fantasia No. 2"
            description="Old, German."
             vid={Vid2}
            setActiveTitle={setActiveTitle}
            setActiveVid={setActiveVid}
          />  

          <TimeLineItem
            title="Gounod Concertino"
            description="It's a good'n too!"
             vid={Vid3}
            setActiveTitle={setActiveTitle}
            setActiveVid={setActiveVid}
          />

          <TimeLineItem
            title="Hoover Winter Spirits"
            description="It's a good'n!"
             vid={Vid4}
            setActiveTitle={setActiveTitle}
            setActiveVid={setActiveVid}
          />
        
          <TimeLineItem
            title="Karg-Elert Chaconne"
            description="HARD TOO!!!"
             vid={Vid5}
            setActiveTitle={setActiveTitle}
            setActiveVid={setActiveVid}
          />  

        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <video src={activeVid} controls className="highlight-video">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  );
}
