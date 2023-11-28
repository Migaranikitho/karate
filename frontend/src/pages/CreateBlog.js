import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";

class CreateBlog extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            title: "",
            summary: "",
            details: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNavigate = this.handleNavigate.bind(this);
    };
        
            handleNavigate(){
                // const history = useHistory();
                // const { history } = this.props;
                // Use the history object to go to a specific route
                // history.push('/blogs');
        };
      
    handleSubmit(event) {
        // const { navigate } = this.props;
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // event.preventDefault();
            // event.stopPropagation();
        }
        else {
            let blogContent = {
                "title": this.state.title,
                "summary": this.state.summary,
                "details": this.state.details
            }
            fetch('http://localhost:3001/blogs', {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogContent),
            }).then(data => { this.handleNavigate() });

        }

    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={e => this.setState({ title: e.target.value })}

                        />

                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="validationCustom03">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control type="text" placeholder="Summary" required
                        value={this.state.summary}
                        onChange={e => this.setState({ summary: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Details</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.details}
                        onChange={e => this.setState({ details: e.target.value })} />
                </Form.Group>


                <Form.Group className="mb-3">
                </Form.Group>
                <Col md={{ span: 3, offset: 1 }}>
                    <Button type="submit">Post</Button>
                </Col>
            </Form>
        );
    }
}

export default CreateBlog;