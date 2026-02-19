import { Container, Row, Col, Button } from "reactstrap";
import { Card } from "react-bootstrap";
import { LuListMinus } from "react-icons/lu";
import { Link } from "react-router-dom";
import web1 from "../../public/1.png";
import web1a from "../../public/2a.png";
import web2 from "../../public/2.png";
import web2a from "../../public/1a.png";
import web3 from "../../public/3.png";
import web3a from "../../public/3a.png";
import des1 from "../../public/Screenshot from 2025-09-03 13-53-37.png";
import des2 from "../../public/Screenshot from 2025-09-03 13-53-40.png";
import des3 from "../../public/Screenshot from 2025-09-03 13-53-48.png";
import des4 from "../../public/Screenshot from 2025-09-03 13-53-53.png";
import des5 from "../../public/Screenshot from 2025-09-03 13-54-14.png";
import des6 from "../../public/Screenshot from 2025-09-03 13-54-22.png";

function PortfolioSection() {
  return (
    <Container className="ms-5">
      <h3>Website Project</h3>
      <br />
      <Row>
        <Col md={4}>
          <Card className="card-dark ">
            <Card.Img src={web2a} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-dark ">
            <Card.Img src={web2} />
          </Card>
        </Col>
        <Col md={4}>
          <h3 style={{ color: "#e86b3e" }}>DonateDoIt</h3>
          <br />
          <p style={{ textAlign: "justify" }}>
            DonateDoIt adalah platform donasi yang saya kembangkan dengan fokus
            pada pengalaman pengguna yang sederhana, transparan, dan responsif.
            Website menampilkan informasi kontribusi, relawan, serta progress
            bantuan secara real-time untuk membangun kepercayaan pengguna,
            sekaligus memperlihatkan kemampuan saya dalam merancang aplikasi web
            yang memadukan desain humanis dan struktur data yang jelas.
          </p>
        </Col>
      </Row>
      <Row className="mt-5 pt-5">
        <Col md={4}>
          <h3 style={{ color: "#1e90ff" }}>Sportydeeva</h3>
          <br />
          <p style={{ textAlign: "justify" }}>
            Sportydeeva merupakan platform pembelajaran olahraga berbasis video
            yang saya rancang dengan tampilan dinamis dan navigasi yang mudah
            dipahami. Melalui integrasi konten edukatif, struktur informasi yang
            rapi, dan performa responsif, proyek ini menunjukkan kemampuan saya
            dalam membangun aplikasi web edukasi interaktif yang siap digunakan
            secara nyata.
          </p>
        </Col>
        <Col md={4}>
          <Card className="card-dark ">
            <Card.Img src={web1} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-dark ">
            <Card.Img src={web1a} />
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 pt-5">
        <Col md={4}>
          <Card className="card-dark ">
            <Card.Img src={web3} />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-dark ">
            <Card.Img src={web3a} />
          </Card>
        </Col>
        <Col md={4}>
          <h3 style={{ color: "#135976" }}>Digiread</h3>
          <br />
          <p style={{ textAlign: "justify" }}>
            Digiread Qur’an adalah aplikasi web membaca Al-Qur’an online yang
            saya buat dengan desain bersih dan nyaman untuk meningkatkan fokus
            pengguna. Dengan fitur pencarian surah, tampilan ayat terstruktur,
            dan antarmuka user-friendly, proyek ini merepresentasikan kemampuan
            saya mengembangkan website berbasis konten yang fungsional sekaligus
            bermanfaat.
          </p>
        </Col>
      </Row>
      <br />
      <h3 className="text-end mt-5">Graphic Design</h3>
      <Row>
        <Col md="2">
          <Card>
            <img src={des1} />
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <img src={des2} />
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <img src={des3} />
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <img src={des4} />
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <img src={des5} />
          </Card>
        </Col>
        <Col md="2">
          <Card>
            <img src={des6} />
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/rifandro-dandika-910a76378/"
        >
          <Button className="btn-dark">Get in touch with me</Button>
        </Link>
      </div>
    </Container>
  );
}

export default PortfolioSection;
