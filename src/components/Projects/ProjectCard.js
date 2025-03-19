import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { IoLogoGithub } from "react-icons/io";
import { MdOutlineWeb } from "react-icons/md";

import DownloadDialogButton from "./DownloadDialogButton";

function ProjectCard(props) {
    return (
        <Card className="project-card">
            <Card.Img variant="top" src={props.imgPath} className="img-projects" />
            <Card.Body>
                <Card.Title className="text-bold">{props.title}</Card.Title>
                <Card.Text className="text-classic">{props.description}</Card.Text>
                <Button href={props.ghLink} target="_blank" className="project-buttons">
                    <IoLogoGithub size={20} style={{marginBottom: "3px"}}/>&nbsp;GitHub
                </Button>
                {!props.demoLink? null :
                    <Button href={props.demoLink} target="_blank" style={{marginLeft: "10px"}} className="project-buttons">
                        <MdOutlineWeb size={20} style={{marginBottom: "3px"}}/>&nbsp;Demo
                    </Button>
                }
                {!props.mobileDownloadLink? null :
                    <DownloadDialogButton
                        downloadLink={props.mobileDownloadLink}
                    />
                }
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;