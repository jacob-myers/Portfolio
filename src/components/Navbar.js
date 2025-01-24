import React from "react";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li >
                        <a href="/">
                            <AiOutlineHome size={20} style={{ verticalAlign: "bottom" }} /> 
                            <span> Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <AiOutlineUser size={20} style={{ verticalAlign: "bottom" }} />
                            <span> About</span>
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            <AiOutlineFundProjectionScreen size={20} style={{ verticalAlign: "bottom" }} />
                            <span> Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="/resume">
                            <CgFileDocument size={20} style={{ verticalAlign: "bottom" }} />
                            <span> Resume</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar