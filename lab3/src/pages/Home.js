import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../component/Navigation";
import Content from "../component/Content"
import Filtermenu from "../component/FilterMenu"
import { useState } from "react";
const Home = ()=> {
  const [filterBrand,setFilterBrand] = useState(0);
    return <>
     <Navigation/>
     <Container>
      <Row>
        <Col md={3}><Filtermenu setFilterBrand={setFilterBrand} filterBrand={filterBrand} /></Col>
        <Col md={9}><Content filterBrand={filterBrand}/></Col>
      </Row>
    </Container>
    </>
}

export default Home;