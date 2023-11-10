import React from "react";
import Book from "../representational/Book";

const BookList = (props) => {
  return (
    props.books.map((book, index) => {
    //access every book in the state
    //console.log(book.bookName, book.writer);
    return (
      <Book
        bookName={book.bookName}
        writer={book.writer}
        delete={() => props.deleteBookState(index)}
        key={book.id}
        inputName={(event) => props.changeWithInputState(event, index)}
      />
    );
  })
  //console.log(bookState);
  //console.log(books[0].props);
  );
};
export default BookList;
