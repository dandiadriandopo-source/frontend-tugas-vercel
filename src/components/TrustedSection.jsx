import { Container, Row, Col, Card } from "reactstrap";
import { IoLogoJavascript } from "react-icons/io";
import { FaGolang, FaReact, FaJava } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiJavascript } from "react-icons/si";

function TrustedSection() {
  return (
    <Container fluid className="my-5">
      <h3 className="text-center">Tools & Language</h3>
      <Row className="text-center ps-5 pe-5 pt-3">
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoLogoJavascript className="fs-3" />
            Javascript
          </Card>
        </Col>
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaGolang className="fs-3" />
            Golang
          </Card>
        </Col>
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaReact className="fs-3" />
            React js
          </Card>
        </Col>
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaJava className="fs-3" />
            Java
          </Card>
        </Col>
      </Row>
      <Row className="text-center ps-5 pe-5 pt-3">
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SiJavascript className="fs-3" />
            Express js
          </Card>
        </Col>
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GrMysql className="fs-3" />
            Mysql
          </Card>
        </Col>
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TbBrandKotlin className="fs-3" />
            Kotlin
          </Card>
        </Col>
        <Col>
          <Card
            className="d-flex gap-2 border-dark border-1 p-2"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SiMongodb className="fs-3" />
            Mongodb
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TrustedSection;
