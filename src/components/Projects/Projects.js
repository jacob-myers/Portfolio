import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import azamiImg from "../../Assets/azami_sm.png";
import ianaImg from "../../Assets/iana_sm.png";
import alibiImg from "../../Assets/alibi_sm.png";

import veilImg from "../../Assets/Projects/veil.png"
import thoutsortImg from "../../Assets/Projects/thoughtsort.png"
import mydoImg from "../../Assets/Projects/mydo.png"
import naposImg from "../../Assets/Projects/napos.png"

function Projects() {
    return (
        <Container fluid className="page-body">
            <Container>
                <Row style={{ display:'flex', justifyContent:"center" }}>
                    <Col
                        className="projects-projects-col justify-content-between"
                        md={6}
                        style={{
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            width: "500px",
                            height: "2300px"
                        }}
                    >
                        <ProjectCard 
                            imgPath={veilImg}
                            title="Veil"
                            description="Cryptography application for encrypting and decrypting text using various ciphers. Contains a performant custom text editor, key editors for each cipher, and support for any alphabet."
                            ghLink="https://github.com/jacob-myers/Veil"
                            demoLink="https://crypto-veil.web.app/"
                        />
                        <ProjectCard 
                            imgPath={thoutsortImg}
                            title="ThoughtSort"
                            description="Thought recording and note taking application. Allows a user to record and search notes. Built with a simple, easy interface, it is exraordinarily responsive for creating, editing, and searching thoughts."
                            ghLink="https://github.com/jacob-myers/ThoughtSort"
                        />
                        <ProjectCard 
                            imgPath={mydoImg}
                            title="Mydo"
                            description="A to-do mobile application. Originally developed for myself to tier and track the urgency of tasks. Allows tasks to be set at a date-time, viewed easily, and recorded once complete. Uses a local MySQL database to persist all tasks."
                            ghLink="https://github.com/jacob-myers/Mydo"
                        />
                        <ProjectCard 
                            imgPath={naposImg}
                            title="NAPOS"
                            description="A restaurant point of sale application. A full system for handling orders from start, finish, to history. Uses a local server to support multiple endpoints as a register, kitchen manager and administrator. Supports payment processing, menu editing, and analytics."
                            ghLink="https://github.com/AlecRoss01/NAPOS-POS-System"
                        />
                    </Col>

                    <Col
                        className="projects-projects-col justify-content-between"
                        style={{
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            maxWidth: "500px",
                            height: "2300px"
                        }}
                    >
                        <img src={azamiImg} alt="art" className="img-projects-art" />
                        <img src={ianaImg} alt="art" className="img-projects-art" />
                        <img src={alibiImg} alt="art" className="img-projects-art" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;