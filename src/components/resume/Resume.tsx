import { Container, Col, Button } from "react-bootstrap";

import { IoMdDownload } from "react-icons/io";

import display_pdf from "../../Assets/Resume_Jacob_Myers_Display.pdf";
import print_pdf from "../../Assets/Resume_Jacob_Myers_Print.pdf";

function Resume() {
    return (
        <Container fluid className="page-body" style={{ height:"100vh" }}>
            <Col style={{height:"85%"}}>
                <Button
                    className="project-buttons"
                    variant="primary"
                    href={display_pdf}
                    target="_blank"
                    style={{ maxWidth: "200px", marginBottom:"20px", marginRight:"20px" }}
                >
                    <IoMdDownload size={18} />
                    &nbsp;Download Resume
                </Button>

                <Button
                    className="project-buttons"
                    variant="primary"
                    href={print_pdf}
                    target="_blank"
                    style={{ maxWidth: "200px", marginBottom:"20px" }}
                >
                    <IoMdDownload size={18} />
                    &nbsp;Download For Print
                </Button>
                
                <Container style={{height:"100%"}}>
                    <iframe title="resume" src={display_pdf} width="100%" height="100%" />
                </Container>
            </Col>
        </Container>
    );
}

export default Resume;