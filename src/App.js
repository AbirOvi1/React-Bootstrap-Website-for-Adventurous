// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">AdventurouS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    {/* Another action */}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Our Services
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* Separated link */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row className="pt-4 my-5">
            <Col sm={7}>
              <Image
                src="https://picsum.photos/900/640"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-light">Welcome to Adventurous</h1>
              <p class="mt-4">
                If you're adventurous, you're eager to try new things and take
                risks. If you can't wait to go kayaking in the Amazon and you're
                willing to try that stew with the weird things floating around
                in it, you're adventurous. We offer you explore the world with
                us.
              </p>
              <Button variant="outline-primary">Click Here</Button>
            </Col>
          </Row>

          <div>
            <h1 class="font-weight-light">More About Us</h1>
            <Row class="d-flex align-content-stretch flex-wrap">
              <Card style={{ width: "18rem" }} className="pt-4">
                <Card.Img variant="top" src="https://picsum.photos/900/700" />
                <Card.Body>
                  <Card.Title>Adventure to explore</Card.Title>
                  <Card.Text>
                    We adventure to know the unknown, we adventure to enjoy the
                    life, we adventure to explore the world.
                  </Card.Text>
                  <Button variant="outline-primary">See More</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="pt-4">
                <Card.Img variant="top" src="https://picsum.photos/900/650" />
                <Card.Body>
                  <Card.Title>We do study tour</Card.Title>
                  <Card.Text>
                    We do study tour. So come with us to explore the world. You
                    are most welcome.
                  </Card.Text>
                  <Button variant="outline-primary">See More</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="pt-4">
                <Card.Img variant="top" src="https://picsum.photos/900/600" />
                <Card.Body>
                  <Card.Title>Places where we explored</Card.Title>
                  <Card.Text>
                    Here are some places where we explored. Check this out. You
                    can explore the world with us.
                  </Card.Text>
                  <Button variant="outline-primary">See More</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="pt-4">
                <Card.Img variant="top" src="https://picsum.photos/900/500" />
                <Card.Body>
                  <Card.Title>Our delicious offers</Card.Title>
                  <Card.Text>
                    We offer you lot of things to enjoy the journey with us.
                  </Card.Text>
                  <Button variant="outline-primary">See More</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="pt-4">
                <Card.Img variant="top" src="https://picsum.photos/900/300" />
                <Card.Body>
                  <Card.Title>Come from anywhere</Card.Title>
                  <Card.Text>
                    Wherever you live, you can easily join with our journey. You
                    can contact with us from anywhere.
                  </Card.Text>
                  <Button variant="outline-primary">See More</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }} className="pt-4">
                <Card.Img variant="top" src="https://picsum.photos/300/200" />
                <Card.Body>
                  <Card.Title>Quick guide</Card.Title>
                  <Card.Text>
                    A quick guide to join with us. You can join with us from
                    anywhere. Welcome to our adventurous family.
                  </Card.Text>
                  <Button variant="outline-primary">See More</Button>
                </Card.Body>
              </Card>
            </Row>
          </div>
        </Container>
      </main>
      <footer class="py-5 bg-dark">
        <Container className="px-4">
          <p class="text-center text-white">Copyright &copy; AbirOvi 2022</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
