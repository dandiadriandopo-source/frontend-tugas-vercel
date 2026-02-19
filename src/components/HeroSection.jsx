import { Container, Row, Col, Button, Nav } from "reactstrap";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <Container fluid className="px-5 hero-wrapper">
      <div className="hero-section">
        <Row className="align-items-center">
          <Col md={6}>
            <p className="hero-subtitle ms-2 m-0">Hey, I'm</p>

            <h1
              className="hero-title m-0"
              style={{ fontSize: "60px", fontWeight: "" }}
            >
              Rifandro Dandika
            </h1>

            <p className="hero-desc ms-2 w-100">
              Fullstack Javascript Programming | UI/UX Designer | Golang
              Programmer | Kotlin Intermediate Programmer | Junior Java
              Programmer | Graphic Designer | Illustrator
            </p>

            <Link
              className="text-decoration-0"
              target="_blank"
              to="https://www.linkedin.com/in/rifandro-dandika-910a76378/"
            >
              <Button className="btn-dark ms-2 ">
                <FaLinkedin className="mb-1"></FaLinkedin> Linkind
              </Button>
            </Link>
            <Link
              className="text-decoration-0"
              target="_blank"
              to="https://www.instagram.com/dedaneevaca/"
            >
              <Button className="btn-dark ms-2 ">
                <FaInstagram className="mb-1"></FaInstagram> Instagram
              </Button>
            </Link>
            <Link
              className="text-decoration-0"
              target="_blank"
              to="https://wa.me/62858-1467-4025"
            >
              <Button className="btn-dark ms-2 ">
                <FaWhatsapp className="mb-1"></FaWhatsapp> Contact
              </Button>
            </Link>
            <Link
              className="text-decoration-0"
              target="_blank"
              to="https://github.com/dandiadriandopo-source"
            >
              <Button className="btn-dark ms-2 ">
                <FaGithub className="mb-1"></FaGithub> GitHub
              </Button>
            </Link>
          </Col>

          <Col md={6} className="text-center">
            <img
              src={heroImg}
              alt="hero"
              className="img-fluid hero-img rounded-5 mt-2"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HeroSection;
