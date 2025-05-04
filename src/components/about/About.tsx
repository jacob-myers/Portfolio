import { Container, Row, Col } from "react-bootstrap";

import Skillstack from "./SkillStack";
import Languagestack from "./LanguageStack";
import Toolstack from "./ToolStack";
import AboutCard from "./AboutCard";

import dragonImg from "../../Assets/DragonBW_sm.png"
import GitHubCalendar from "react-github-calendar";

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
                

                <Row
                    style={{justifyContent:"center", paddingTop:"30px", paddingBottom:"30px"}}
                >
                    <h1 className="project-header text-classic">Contributions</h1>
                    <GitHubCalendar 
                        blockSize={14}
                        blockMargin={4}
                        fontSize={16}
                        username="jacob-myers"
                        colorScheme="dark"
                        theme={{
                            dark: ["#191818", "#5E5E5F", "#999998", "#D1D0D1", "#ffffff"],
                        }}
                    />
                </Row>
                <Container style={{height:"80px"}} />

                
                
            </Container>
        </Container>
    );
}

export default About;