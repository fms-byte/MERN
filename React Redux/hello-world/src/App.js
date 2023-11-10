import React, { Component } from "react"; //Convert JSX code to HTML code
import "./App.css";
import Book from "./components/Book";

class App extends Component {
  //state
  state = {
    //this can be write in 16.8 or above version of React
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" },
      { bookName: "Kafka on the Shore", writer: "Haruki Murakami" },
    ],
    otherProp: "I am some other prop",
  };

  changeBookState = (newBookName) => {
    //console.log("Was clicked!");
    //Wrong: this.state.books[0].bookName = "Nineteen Eighty-Four";
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Alchemist", writer: "Paulo Coelho" },
        { bookName: "Kafka on the Shore", writer: "Haruki Murakami" },
      ],
    });
  };

  changeWithInputState = event => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Alchemist", writer: "Paulo Coelho" },
        { bookName: "Kafka on the Shore", writer: "Haruki Murakami" },
      ],
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
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen 84")}
        />
      </div>
    );
  }
}

export default App;

//this.changeBookState.bind(this, "Nineteen 84")
//() => {this.changeBookState("Nineteen 84")}
//These 2 lines are same and they are used to pass parameter to a function
