import { Container, Row, Col } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";

import HomeCard from "./HomeCard";

import selfImg from "../../Assets/self.png"

function Home() {
    return (
        <Container fluid className="page-body home-body">
        <Row style={{ display:'flex', justifyContent:"center", marginTop:"50px" }}>
          <Col
            className="content-col"
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "00px",
              paddingBottom: "00px",
              width: "350px"
            }}
          >
            <HomeCard/>
            <ul className="about-social-links">
                <li className="social-icon-li">
                    <a
                        href="https://github.com/jacob-myers"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon-a"
                    >
                        <IoLogoGithub size={40} color="black" style={{ marginTop:"5px" }}/>
                    </a>
                </li>
                <li className="social-icon-li">
                    <a
                        href="https://www.linkedin.com/in/jacob-m-myers/"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon-a"
                    >
                        <TiSocialLinkedin size={40} color="black" style={{ marginTop:"5px" }}/>
                    </a>
                </li>
            </ul>
          </Col>
          
          <Col
            className="content-col"
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              width: "500px"
            }}
          >
            <img src={selfImg} alt="art" className="img-self" />
          </Col>
        </Row>
      </Container>
    );
}

export default Home;