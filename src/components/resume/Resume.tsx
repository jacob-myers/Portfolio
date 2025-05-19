import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { IoMdDownload } from "react-icons/io";

const lightResumeID = "15Nrs313t6oKPGaPp0fKlRh37vjZtf4ue8ntYHueSJNM";
const darkResumeID = "1jlC_nTHWrdWSkoKlJje1d0EQsMCjIie-SyBsSj6RQPc";

const lightResumeLink = `https://docs.google.com/viewer?url=https://docs.google.com/document/d/${lightResumeID}/export?format=pdf&embedded=true`;
const darkResumeLink = `https://docs.google.com/viewer?url=https://docs.google.com/document/d/${darkResumeID}/export?format=pdf&embedded=true`;

const lightResumeDownloadLink = `https://docs.google.com/document/d/${lightResumeID}/export?format=pdf`;
const darkResumeDownloadLink = `https://docs.google.com/document/d/${darkResumeID}/export?format=pdf`;

function Resume() {

    const [alignment, setAlignment] = React.useState('dark');

    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <Container fluid className="page-body" style={{ height:"100vh" }}>
            <Col style={{height:"85%"}}>
                <Row
                    style={{ justifyContent:"center", marginBottom:"20px"}}
                >
                    <Button
                        className="project-buttons"
                        variant="primary"
                        href={alignment === 'dark' ? darkResumeDownloadLink : lightResumeDownloadLink}
                        //target="_blank"
                        style={{ maxWidth: "200px",  marginRight:"20px" }}
                    >
                        <IoMdDownload size={18} />
                        &nbsp;Download Resume
                    </Button>

                    <ToggleButtonGroup
                        className="custom-toggle-group"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Resume Picker"
                        style={{ }}
                    >
                        <ToggleButton className='custom-toggle' value='light'>Light</ToggleButton>
                        <ToggleButton className='custom-toggle' value='dark'>Dark</ToggleButton>
                    </ToggleButtonGroup>
                </Row>
                
                <Container style={{height:"100%"}}>
                    <iframe 
                        title="resume" 
                        src={alignment === 'dark' ? darkResumeLink : lightResumeLink} 
                        width="100%" 
                        height="100%" 
                    />
                </Container>
                
            </Col>
        </Container>
    );
}

export default Resume;