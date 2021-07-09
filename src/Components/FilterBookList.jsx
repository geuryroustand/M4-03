import { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";

class FilterBookList extends Component {
  state = {
    searchTerm: "",
    booksSearch: [],
  };

  searchElement = (e) => {
    this.setState({
      searchTerm: e.target.value,
      booksSearch: this.props.books.filter((book) =>
        book.title.toLowerCase().includes(this.state.searchTerm)
      ),
    });

    if (e.target.value === "") {
      this.setState({
        searchTerm: "",
        booksSearch: [],
      });
    }
  };

  render() {
    return (
      <>
        <Form inline className="my-4">
          <FormControl
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={(e) => this.searchElement(e)}
            className="mr-sm-2"
          />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>

        {this.state.booksSearch.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </>
    );
  }
}

export default FilterBookList;
