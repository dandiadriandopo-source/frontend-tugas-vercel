import { Container, Row, Col } from "reactstrap";
import { Card } from "react-bootstrap";
import PortfolioSection from "../components/PortfolioSection";

function Projects() {
  return (
    <Container>
      <h2 className="section-title text-center mb-5">Featured Projects</h2>
      <PortfolioSection />
    </Container>
  );
}

export default Projects;
