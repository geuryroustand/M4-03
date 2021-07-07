import { Card, Row, Col } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Col>
      <Card style={{ width: "15rem " }}>
        <Card.Img variant="top" className="w-100" src={book.img} />
        <Card.Body>
          <Card.Title className=" text-title ">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
