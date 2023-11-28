import React, { Component, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



class Blogs extends React.Component {
        constructor(props) {
          super(props);
          this.state = {blogs: []};
        }
        componentDidMount() {
            fetch('http://localhost:3001/blogs', {
                method: 'GET',
                // mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(v => {
                console.log(v);
                // this.setState({blogs:v})
                return v.json();
            }).then(data =>{
                console.log(data);
                this.setState({blogs:data});
            });
        }
    render() {

        // const blogs = [{
        //     image: './../resources/1.jpeg',
        //     title: "Karate for kids",
        //     summary: "How karate helps kids to improve their personality",
        // }];

        return (
            <div>
                <Row xs={1} md={4} className="g-4">
                {this.state.blogs.map((blog, idx) => (
                    // { blogs.forEach((item, index) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={blog.image} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.summary}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
                <Button className="sticky-left" href = '/CreateBlog' variant="primary" size="sm">Create</Button>
            </div>
        );
    }
}

export default Blogs;