
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class ClassDetails extends React.Component {
    render() {
        const { classDetail } = this.props;
        return (
            <div>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem', backgroundColor : "lightgreen" }}>
      <Card.Img variant="top" src="holder.js/100px180"/>
      <Card.Body>
        <Card.Title>{classDetail.title}</Card.Title>
        <Card.Text style={{color : "red"}}>
            Tournament on 16th February!! <a href="./../Blogs/Blog1.js" target={"_blank"}>read more...</a>
        </Card.Text>
      </Card.Body>
    </Card>
                    </Col>
                </Row>

            </div>);
    }
}

export default ClassDetails;