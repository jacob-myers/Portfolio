import { Col, Container, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import { 
    SiJetbrains,
    SiAndroidstudio,
    SiOracle,
    SiCloudflare,
    SiKrita,
    SiDavinciresolve 
} from "react-icons/si";
import { 
    IoLogoFirebase
} from "react-icons/io5";
import { 
    IoLogoGithub
} from "react-icons/io";
import { 
    LuPaperclip
} from "react-icons/lu";
import { 
    FaTrello,
    FaSlack
} from "react-icons/fa";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center" }}>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <VscVscode size={30}/>
                    VSCode
                </Container>
                <Container className="skill-description">IDE</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiJetbrains size={30}/>
                    Jetbrains IDEs
                </Container>
                <Container className="skill-description">Series of IDEs</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiAndroidstudio size={30}/>
                    Android Studio
                </Container>
                <Container className="skill-description">IDE and toolkit</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiOracle size={30}/>
                    Oracle JDK
                </Container>
                <Container className="skill-description">IDE and toolkit</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <IoLogoFirebase size={30}/>
                    Firebase
                </Container>
                <Container className="skill-description">Cloud service hosting</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiCloudflare size={30}/>
                    Cloudflare
                </Container>
                <Container className="skill-description">Cloud service hosting</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <IoLogoGithub size={30}/>
                    GitHub
                </Container>
                <Container className="skill-description">Version control host</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaTrello size={30}/>
                    Trello
                </Container>
                <Container className="skill-description">Collaboration tool</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaSlack size={30}/>
                    Slack
                </Container>
                <Container className="skill-description">Team communication tool</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiKrita size={30}/>
                    Krita
                </Container>
                <Container className="skill-description">Digital painting software</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <LuPaperclip size={30}/>
                    Clip Studio
                </Container>
                <Container className="skill-description">Digital painting software</Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiDavinciresolve size={30}/>
                    DaVinci Resolve
                </Container>
                <Container className="skill-description">Video editing software</Container>
            </Col>
        </Row>
    );
}

export default Toolstack;