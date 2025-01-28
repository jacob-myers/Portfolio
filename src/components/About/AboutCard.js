import React from "react";
import { Container } from "react-bootstrap";

function AboutCard() {
    return (
        <Container className="about-quote">
            <blockquote className="blockquote" style={{ margin:"0", textAlign:"left"}}>
                <h1 className="project-header text-bold">Who I Am</h1>
                <p style={{ fontSize:"1.1em" }} className="text-classic">
                    I'm <span className="text-bold">Jacob Myers </span> 
                    from <span className="text-bold">New Hampshire, USA.</span>
                    <br/> <br/>
                    Professionally I am a software engineer and am always interested in new opportunities for work.
                    I hold a bachelors of science in <span className="text-bold">Computer Science and Innovation </span>from Champlain College.
                    I am also an experienced digital and sketch artist. All artwork used on this site is mine.
                </p>
            </blockquote>
        </Container>
  );
}

export default AboutCard;