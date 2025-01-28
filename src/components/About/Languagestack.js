import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { 
    FaDartLang
} from "react-icons/fa6";
import { 
    FaPython,
    FaJava,
    FaHtml5,
    FaSwift,
} from "react-icons/fa";
import { 
    IoLogoJavascript
} from "react-icons/io5";
import { 
    SiCplusplus,
    SiClojure
} from "react-icons/si";
import { 
    PiFileCSharpFill,
    PiFileSql
} from "react-icons/pi";
import { 
    TbBrandGolang 
} from "react-icons/tb";

function Languagestack() {
    return (
        <Row style={{ justifyContent: "center" }}>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaDartLang size={30}/>
                    Dart
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaPython size={30}/>
                    Python
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaJava size={30}/>
                    Java
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiCplusplus size={30}/>
                    C++
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <PiFileCSharpFill size={30}/>
                    C#
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <PiFileSql size={30}/>
                    SQL
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <TbBrandGolang size={30}/>
                    Golang
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaSwift size={30}/>
                    Swift
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <SiClojure size={30}/>
                    Clojure
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <IoLogoJavascript size={30}/>
                    Javascript
                </Container>
            </Col>
            <Col md={2} className="skill-card text-classic">
                <Container className="skill-title text-bold">
                    <FaHtml5 size={30}/>
                    HTML
                </Container>
            </Col>
        </Row>
    );
}

export default Languagestack;