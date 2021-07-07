import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import { Container } from "react-bootstrap";
import SingleBook from "./Components/SingleBook";
import books from "./data/fantasy.json";
import BookList from "./Components/BookList";

import FilterBookList from "./Components/FilterBookList";

import "./App.css";
// console.log(books);

function App() {
  return (
    <Container className="mt-5">
      <WarningSign text="Please be careful" />
      <MyBadge color="primary" text="Hi from a Badge" />
      <FilterBookList books={books} />
      <BookList books={books} />
    </Container>
    // <>
    //   <WarningSign text="Please be careful" />
    //   <MyBadge color="primary" text="Hi from a Badge" />
    //   <BookList books={books} />
    // </>
  );
}

export default App;
