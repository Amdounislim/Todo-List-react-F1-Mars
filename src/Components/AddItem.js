import React, { Component } from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default class AddItem extends Component {
  state = {
    myInput: "",
  };
  handelChange = (e) => {
    this.setState({
      myInput: e.target.value,
    });
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.myInput) {
      //1
      this.props.add({ text: this.state.myInput, id: uuidv4(), isDone:false });
      //2
      this.setState({ myInput: "" });
    } else {
      alert("mahah");
    }
  };

  render() {
    return (
      <Card bg="primary">
        <Card.Body>
          <h1 className={"text-white"}>To-Do-App !</h1>

          <Form onSubmit={this.add}>
            <Form.Group>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={this.handelChange}
                  //3
                  value={this.state.myInput}
                />
                <InputGroup.Append>
                  <Button variant="success" onClick={this.add}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
