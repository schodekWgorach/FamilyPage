import React from 'react';
import {Carousel} from "react-bootstrap";


function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Rodzina"
                />
                <Carousel.Caption>
                    <h3>Roman i Stanisława</h3>
                    <p>Przed wybuchem I wojny światowej rodzina się świetnie rozwijała, nikt nie wiedział że przyjdzie wojna i Hiszpanka</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="src/assets/carousel/1_family.jpg"
                    alt="Szkoła"
                />
                <Carousel.Caption>
                    <h3>Szkoła na wschodzie</h3>
                    <p>Klasy na wsiach były bardzo małe, chodziły do nich dzieci w różnym wieku.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Na polu"
                />
                <Carousel.Caption>
                    <h3>Stasia w polu na wschodzie</h3>
                    <p>
                        Wiosna kobiety chodziły w wiankach na głowie zwłaszcza na wschodzie.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;