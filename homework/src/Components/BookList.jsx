import { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Row xs={1} md={4} className="g-4">
        {this.props.books.map((book, index) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    );
  }
}

export default BookList;
