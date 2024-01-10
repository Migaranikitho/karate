import React, { Component } from "react";
import UncontrolledExample from "./Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from "./Background.js";
import background from '../resources/home bi.jpeg'


class Home extends React.Component {

    render() {
        return (


            <div style={{ src:{background}, backgroundRepeat: "no-repeat", backgroundPosition: "center", position: 'relative' }}>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={6}>
                        <div style={{ paddingTop: 10 }}>
                            <UncontrolledExample /> 
                        </div>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col>
                        The name Wadō-ryū has three parts: Wa, dō, and ryū.
                        Wa means "harmony," dō (same character as tao) means "way," and ryū means "school" or "style".
                        Harmony should not be interpreted as pacifism; it is simply the acknowledgment that yielding is sometimes more
                        effective than brute strength.[3]

                        <a href="https://en.wikipedia.org/wiki/Wad%C5%8D-ry%C5%AB">read more</a>

                    </Col>
                </Row>

            </div>

        );

    }

}

export default Home;