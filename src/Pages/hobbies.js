import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Placeholder,
} from "react-bootstrap";
import "./About.css";

function WorkExperience() {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <p className="t1">
                            <span>Work Experience</span>
                        </p>
                        <p className="t2">
                            <span>
                                Id mollit ipsum consectetur nisi duis irure esse
                                enim adipisicing adipisicing.
                            </span>
                        </p>
                        <p className="t3">
                            <span>
                                Aliqua velit reprehenderit voluptate et
                                exercitation sunt esse ad id excepteur duis.
                                Consequat do est amet nisi commodo ut dolore
                                sunt. Consectetur pariatur cupidatat
                                reprehenderit cupidatat non reprehenderit do ad
                                veniam. Aliqua incididunt nisi consectetur ex
                                sit anim est nisi esse magna laboris dolore.
                            </span>
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="imageContainer">
                        <img
                            className="image"
                            src="https://random.imagecdn.app/402/300"
                        ></img>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkExperience;
