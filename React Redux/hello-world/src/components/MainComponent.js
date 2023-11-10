import React, { Component } from "react"; //Convert JSX code to HTML code
import bookList from "../assets/books";
import BookList from "./lists/BookList";

class MainComponent extends Component {
    //state
  state = {
    //this can be write in 16.8 or above version of React
    books: bookList,
    showBooks: true,
  };

  changeWithInputState = (event,index) => {
    const book = {
      ...this.state.books[index]
    };

    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({books: books });
  }

  deleteBookState = (index) => {
    //console.log(index);
    //const books = this.state.books.slice(); //copy of list of books
    //const books = this.state.books.map(item => item); //copy of list of books
    const books = [...this.state.books]; //copy of list of books
    books.splice(index, 1); //delete the book
    this.setState({
      books: books
    });
  }

  toggleBooks = () => {
    this.setState({ 
      showBooks: !this.state.showBooks
    });
  }

  render() {
    //inline CSS: Cannot be written as normal css. We need to write the css code as an object of JavaScript. Need to write inside of render(). React will convert it to normal css.
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };

    //const bookState = this.state.books; //list of books
    let books = null;
    if(this.state.showBooks){
      books = <BookList 
        books={this.state.books} 
        deleteBookState= {this.deleteBookState}
        changeWithInputState= {this.changeWithInputState}
      />
    }
    
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        { books }
      </div>
    );
  }
}
export default MainComponent;