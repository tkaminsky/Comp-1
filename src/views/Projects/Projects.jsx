import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Poetry: Acrostics and Haikus"
        description="My linguistic mastery is astounding."
        link="https://docs.google.com/document/d/1dPKLSLLy76FUNAnMGwJbV0UcNgibR6VdaxAAHOOFhHw/edit?usp=sharing"
      />
      <Project
        title="Original Composition: Jabberwocky"
        description="Based on the poem by Lewis Caroll, this former English project is indisputible proof that I went to an arts school."
        link="https://musescore.com/user/7833981/scores/5075735"
      />
      <Project
        title="Short Film: Lucid Dreaming"
        description="You may be tempted to believe that this is an early work by Darren Aronofsky, but it is, in fact, my 7th Grade film project. Enjoy."
        link="https://www.youtube.com/watch?v=MSnyUofTLh0"
      />
    </div>
  );
}
