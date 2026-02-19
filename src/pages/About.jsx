import { Container, Row, Col, Button } from "reactstrap";

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h6 className="text-warning">Behind the Designs</h6>
          <h1 className="section-title">
            Shaping Experiences That Make Life Simpler
          </h1>
        </Col>

        <Col md={6}>
          <p style={{ color: "#aaa" }}>
            I'm a product designer focused on building clean, intuitive
            interfaces that solve real-world problems. From branding to digital
            experiences, I create impactful designs that connect with people.
          </p>

          <Button className="btn-orange mt-3">Get in Touch</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
