import React from "react";
import { Container} from "react-bootstrap";

import Skillstack from "./Skillstack";
import Languagestack from "./Languagestack";
import Toolstack from "./Toolstack";

function About() {
    return (
        <Container fluid className="page-body">
            <Container>
                <h1 className="project-header text-classic">Languages</h1>
                <Languagestack />
                <h1 className="project-header text-classic">Skills</h1>
                <Skillstack />
                <h1 className="project-header text-classic">Tools</h1>
                <Toolstack />
                <Container style={{height:"80px"}}>

                </Container>
            </Container>
        </Container>
    );
}

export default About;