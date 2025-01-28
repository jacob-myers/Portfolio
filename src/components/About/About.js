import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Skillstack from "./Skillstack";
import Languagestack from "./Languagestack";
import Toolstack from "./Toolstack";
import AboutCard from "./AboutCard";

import dragonImg from "../../Assets/DragonBW.png"

function About() {
    return (
        <Container fluid className="page-body">
            <Container>
                <Row style={{ display:'flex', justifyContent:"center" }}>
                    <Col
                        className="content-col"
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            minWidth: "500px"
                        }}
                    >
                        <AboutCard />
                    </Col>
                    <Col
                        className="content-col"
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "30px",
                            minWidth: "500px",
                        }}
                    >
                        <img src={dragonImg} alt="dragon" className="img-dragon" />
                    </Col>
                </Row>
                
                <Container style={{height:"40px"}} />
                <h1 className="project-header text-classic">Languages</h1>
                <Languagestack />
                <h1 className="project-header text-classic">Skills</h1>
                <Skillstack />
                <h1 className="project-header text-classic">Tools</h1>
                <Toolstack />
                <Container style={{height:"80px"}} />
            </Container>
        </Container>
    );
}

export default About;