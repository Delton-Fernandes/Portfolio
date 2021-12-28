import { Carousel } from "react-bootstrap";
import "./StartCarouselSection.css";

function StartCarouselSection() {
    let interval_time = 5000;
    return (
        <div>
            <Carousel class="carousel">
                <Carousel.Item class="carousel-item" interval={interval_time}>
                    <img src="sunset1.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carousel-item" interval={interval_time}>
                    <img src="sunset2.jpg" alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carousel-item" interval={interval_time}>
                    <img src="sunset3.jpg" alt="Third slide" />

                    <Carousel.Caption>
                        <div class="height = 100"></div>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default StartCarouselSection;
