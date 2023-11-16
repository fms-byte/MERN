import React, { Component } from "react";
import Book from "../representational/Book";

class BookList extends Component {
  render() {
    return this.props.books.map((book, index) => {
      //access every book in the state
      //console.log(book.bookName, book.writer);
      return (
        <Book
          bookName={book.bookName}
          writer={book.writer}
          delete={() => this.props.deleteBookState(index)}
          key={book.id}
          inputName={(event) => this.props.changeWithInputState(event, index)}
        />
      );
    });
    //console.log(bookState);
    //console.log(books[0].props);
  }
}
export default BookList;
