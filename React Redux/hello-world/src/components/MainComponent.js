import React, { Component } from "react"; //Convert JSX code to HTML code
import bookList from "../assets/books";
import BookList from "./lists/BookList";
import NewBook from "./representational/NewBook";
import { Routes, Route, NavLink, Navigate } from "react-router-dom"; //Routes for Multiple Route, Route for Single Route
import BookDetails from "./representational/BookDetails";

class MainComponent extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      //this can be write outside of Constructor in the 16.8 or above version of React
      books: bookList,
      selectedBook: null,
    };
  }

  selectedBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    })
  }

  render() {
    //const bookState = this.state.books; //list of books
    const books = <BookList books={this.state.books} selectedBookHandler={this.selectedBookHandler}/>;   
    
    return (
      <div className="App">
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/books" />}></Route>
          <Route path="/books" element={books}></Route>
          <Route path="/new-book" element={<NewBook />}></Route>
          <Route path="/:id" element={<BookDetails book={this.state.selectedBook}/>}></Route>
        </Routes>
      </div>
    );
  }
}

export default MainComponent;