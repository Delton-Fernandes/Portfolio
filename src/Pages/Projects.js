import {
    Container,
    Card,
    Row,
    Col,
    Button,
    Placeholder,
} from "react-bootstrap";
import "./About.css";

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    // loop over every image
    // figure out where it needs to be shown
    // at least 50% of its height

    sliderImages.forEach((sliderImage) => {
        //half way through images
        const slideInAt =
            window.scrollY + window.innerHeight - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // half way in the images
        const isHalfShown = slideInAt > sliderImage.offsetTop;

        const isNoScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNoScrolledPast) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", debounce(checkSlide));

function ProjectsPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="imageContainer">
                        <img
                            className="image align-left slide-in"
                            src="https://random.imagecdn.app/400/300"
                        ></img>
                    </div>
                </Col>
                <Col>
                    <div>
                        <p className="t1" id="text">
                            <span>Projects</span>
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
            </Row>
        </Container>
    );
}

export default ProjectsPage;
