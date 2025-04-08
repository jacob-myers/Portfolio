import React from "react";
import { Container, Col, Button } from "react-bootstrap";

import { IoMdDownload } from "react-icons/io";

import pdf from "../../Assets/Resume_Jacob_Myers.pdf";

function Resume() {
    return (
        <Container fluid className="page-body" style={{ height:"100vh" }}>
            <Col style={{height:"85%"}}>
                <Button
                    className="project-buttons"
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "200px", marginBottom:"20px" }}
                >
                    <IoMdDownload size={18} />
                    &nbsp;Download Resume
                </Button>
                
                <Container style={{height:"100%"}}>
                    <iframe title="resume" src={pdf} width="100%" height="100%" />
                </Container>
            </Col>
        </Container>
    );
}

export default Resume;