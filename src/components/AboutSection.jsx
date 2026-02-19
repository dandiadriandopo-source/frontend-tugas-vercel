import { Container, Row, Col, Button, Card } from "reactstrap";

function AboutSection() {
  return (
    <Container className="my-5">
      <div>
        <h2 className="section-title">2 Years Experience</h2>

        <p style={{ textAlign: "justify" }}>
          Saya adalah Fullstack JavaScript Developer dengan pengalaman lebih
          dari 2 tahun dalam membangun aplikasi web end-to-end, mulai dari
          perancangan antarmuka hingga pengembangan backend dan integrasi
          database. Saya terbiasa mengembangkan sistem berbasis React pada sisi
          frontend serta Node.js dan Express pada sisi server, termasuk
          implementasi autentikasi, manajemen data, dan pembuatan REST API.
          Fokus utama saya adalah membuat aplikasi yang stabil, efisien, dan
          mudah digunakan untuk kebutuhan operasional maupun bisnis.
        </p>
      </div>
    </Container>
  );
}

export default AboutSection;
