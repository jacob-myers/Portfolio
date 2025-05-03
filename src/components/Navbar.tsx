import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { RiGitBranchFill } from "react-icons/ri";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Button } from "react-bootstrap";

import logo from "@/assets/icon.png"


function JNavbar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
        updateNavbar(true);
        } else {
        updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(!expand);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                                <AiOutlineUser size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                                <AiOutlineFundProjectionScreen size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                                <CgFileDocument size={20} style={{ verticalAlign: "bottom", marginBottom: "3px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Button
                                className="navbar-button"
                                href="https://github.com/jacob-myers/Portfolio"
                                target="_blank"
                            >
                                <RiGitBranchFill size={20} style={{ marginBottom:"2px" }} />
                                <RxOpenInNewWindow size={20} style={{ marginBottom:"2px" }} />
                                
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default JNavbar