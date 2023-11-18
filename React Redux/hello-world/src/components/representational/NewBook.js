import React, { Component, createRef } from "react";
import books from "../../assets/books.js";

class NewBook extends Component {
  constructor(props) {
    super(props);
    this.bookName = createRef();
    this.writer = createRef();
    this.description = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    // console.log(this.bookName.current.value);
    // console.log(this.writer.current.value);
    // console.log(this.description.current.value);
    //this newBook can be stored in Database
    const newBook = {
      id: books.length + 1,
      bookName: this.bookName.current.value,
      writer: this.writer.current.value,
      description: this.description.current.value,
    };
    books.push(newBook);

    localStorage.setItem("books", JSON.stringify(books));

    // e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>New Book Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Book Name: </label>
          <br />
          <input type="text" name="bookName" ref={this.bookName}/>
          <br />
          <label>Writer: </label>
          <br />
          <input type="text" name="writer" ref={this.writer}/>
          <br />
          <label>Description: </label>
          <br />
          <textarea name="description" ref={this.description}/>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBook;
