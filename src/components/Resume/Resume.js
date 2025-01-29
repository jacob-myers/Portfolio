import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";

import { IoMdDownload } from "react-icons/io";

import pdf from "../../Assets/Resume-Jacob_Myers_4.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function Resume() {
    return (
        <Container fluid className="page-body">
            <Col>
                {/* 
                <Button
                    className="project-buttons"
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "200px", marginBottom:"20px" }}
                >
                    <IoMdDownload />
                    &nbsp;Download Resume
                </Button>
                */}

                <Container style={{height:"84vh"}}>
                    <iframe title="hi" src={pdf} width="100%" height="100%" />
                </Container>

                {/* 
                <Document file={pdf} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={1.5} />
                </Document> 
                */}

                {/* 
                <Button
                    className="project-buttons"
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "200px", marginTop:"20px" }}
                >
                    <IoMdDownload />
                    &nbsp;Download Resume
                </Button>
                */}
            </Col>
        </Container>
    );
}

export default Resume;