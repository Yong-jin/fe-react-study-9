import "./FoodMarket.css";
/* import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; */

import { Container, Nav, Navbar, Spinner, Button, Row, Col, Card } from 'react-bootstrap';

import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';


function FoodMarket() {

    return (

        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            {/* 
                이미지 사용 (연결)

                * html 연결 상대경로 연결
                <img src="./images/a.png" />
                <img src="../../monday/coffee.jpg" />

                React 방식
                상대폴더경로 링크로 연결X

                React 컴포넌트 방식에서 이미지 사용시
                1. import 이미지
                2. 외부 이미지 url 경로

             */}

            {/* <img src={banner_bg}/>
            <img src="https://images.pexels.com/photos/35519304/pexels-photo-35519304.jpeg"/> */}

            {/* <div className="main-bg" style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div> */}
            <div className="main-bg"></div>




            {/* bootstrap 한줄 기준 : 12  */}
            <Container>
                <Row>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>카드 타이틀</Card.Title>
                                <Card.Text>
                                    카드 텍스트 부분
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>











            {/* <Button variant="primary">Primary</Button>
            <Button variant="danger">빨간버튼</Button>

            <Button variant="outline-success">Success</Button>


            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">첫번째메뉴</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another 액션</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>


            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}

        </div>
    )

}

export default FoodMarket;