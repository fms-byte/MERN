import React, { Component } from "react"; //Convert JSX code to HTML code
import bookList from "../assets/books";
import BookList from "./lists/BookList";
import NewBook from "./representational/NewBook";
import { Routes, Route } from "react-router-dom"; //Routes for Multiple Route, Route for Single Route

class MainComponent extends Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      //this can be write outside of Constructor in the 16.8 or above version of React
      books: bookList,
    };
  }

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

  render() {
    //const bookState = this.state.books; //list of books
    const books = <BookList 
        books={this.state.books} 
        deleteBookState= {this.deleteBookState}
        changeWithInputState= {this.changeWithInputState}
      />;
    
    
    return (
      <div className="App">
        <div className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-book">New Book</a>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/new-book" element={<h1>New Book</h1>}></Route>
        </Routes>
      </div>
    );
  }
}


export default MainComponent;

/*Component Creation Lifecycle

constructor(props) //Initialze the State. State can be declared outside of the constructor in newer version of React
|
v
componentWillMount() //Avoided in the newer version of React
|
v
render()
|
v
Render Nested/Child Components
|
v
componentDidMount()


Component Update Lifecycle By Props: When the state is changed by props

componentWillReceiveProps(nextProps) //Avoided in the newer version of React and start with UNSAFE_
|
v
shouldComponentUpdate(nextProps, nextState) 
|
v
componentWillUpdate(nextProps, nextState) //Avoided in the newer version of React and start with UNSAFE_
|
v
render()
|
v
Update Nested/Child Components Props
|
v
componentDidUpdate()


Component Update Lifecycle By State: When the state is changed by setState()

shouldComponentUpdate(nextProps, nextState)
|
v
componentWillUpdate(nextProps, nextState) //Avoided in the newer version of React and start with UNSAFE_
|
v
render()
|
v
Update Nested/Child Components Props
|
v
componentDidUpdate()


Updated LifeCycle Methods or Hooks: Introduced in React 16.8

//This method will work on both Creation and Updating Props and State
static getDerivedStateFromProps(nextProps, prevState) //this function replaced componentWillUpdate(nextProps, nextState), componentWillReceiveProps(nextProps) and componentWillMount()

getSnapshotBeforeUpdate() //this function replaced componentWillUpdate(nextProps, nextState)


Quiz:
1. Which one is called when component is rendered for the first time?
Ans: componentDidMount()
2. Which can be used to stop a component to get updated?
Ans: shouldComponentUpdate()
3. What will happen if we call setState inside componentDidUpdate()?
Ans: Stack Overflow Error 
4. Birth of your component can be referred as ?
Ans: Mounting
5. Which one is called before component is getting destroyed?
Ans: componentWillUnmount()

React Router:
1. SPA and MPA
SPA: Single Page Application
MPA: Multiple Page Application
//MPA
something.com/ -> index.html
something.com/about -> about.html
something.com/contact -> contact.html

//SPA
Only 1 Page Application
something.com/ -> HomeComponent
something.com/about -> AboutComponent
something.com/contact -> ContactComponent

Here, something.com/ is the root component and HomeComponent, AboutComponent, ContactComponent are the child component of the root component and /About, /Contact are called Route

Route Handle the Component Rendering
*/
