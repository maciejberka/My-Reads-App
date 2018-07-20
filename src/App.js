import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks';
import Bookshelves from './Bookshelves';

class BooksApp extends React.Component {
  
  state = {
    booksOnShelves: []
  }
  
  updateBooksOnShelves = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ booksOnShelves: books });
      })
  }

  // This function is okay! But how to pass it to Book.js Component?
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateBooksOnShelves();
    }).catch(error => console.log(error));
  };
  
  componentDidMount() {
    this.updateBooksOnShelves();
  };

  render() {
    return (
      <div className="app">

        {/* Render the SearchBooks Component */}
        <Route
          exact path = "/search"
          render = {() => (
            <SearchBooks/>
          )}
        />
        
        {/* Render the Bookshelves Component */}
        <Route
          exact path = "/"
          render = {() => (
             <Bookshelves 
               books = {this.state.booksOnShelves}
               changeShelf = {this.changeShelf}
             />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
