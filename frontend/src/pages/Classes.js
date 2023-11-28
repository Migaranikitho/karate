import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ClassDetails from "./ClassDetails";


class Classes extends React.Component {

    render() {

        const classesDetails = [{ title: "Karate for adults", summary: "summary Karate for adults" },
        { title: "Karate for kids", summary: "summary Karate for kids" },
        { title: "Japaneese language" , summary: "summary Language classes" }];

        return (
            <div>
                {
                    classesDetails.map((classDetail, _) => (
                        <Row>
                            <Col>
                                <ClassDetails classDetail={classDetail} />
                            </Col>
                        </Row>
                    ))
                }
            </div>
        );
    };

}

export default Classes;