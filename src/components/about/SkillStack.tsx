import { Col, Container, Row } from "react-bootstrap";
import { 
    FaFlutter,
} from "react-icons/fa6";
import { 
    FaGitAlt,
    FaReact,
    FaNodeJs
} from "react-icons/fa";
import { 
    SiDotnet
} from "react-icons/si";

function Skillstack() {
    return (
        <Row style={{ justifyContent: "center" }}>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaFlutter size={30}/>
                    Flutter
                </Container>
                <Container className="skill-description">Cross platform framework</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaGitAlt size={30}/>
                    Git
                </Container>
                <Container className="skill-description">Version control system</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaReact size={30}/>
                    React
                </Container>
                <Container className="skill-description">Development library</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaNodeJs size={30}/>
                    Node.js
                </Container>
                <Container className="skill-description">JavaScript environment</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiDotnet size={30}/>
                    .Net
                </Container>
                <Container className="skill-description">Development framework</Container>
            </Col>
        </Row>
    );
}

export default Skillstack;