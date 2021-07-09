import { Card, Row, Col } from "react-bootstrap";

import React from "react";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col>
        <Card
          style={{ width: "15rem " }}
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img variant="top" className="w-100" src={this.props.book.img} />
          <Card.Body>
            <Card.Title className=" text-title ">
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
