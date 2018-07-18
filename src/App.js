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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ booksOnShelves: books });
      })
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
             <Bookshelves books = {this.state.booksOnShelves}/>
          )}
        />

      </div>
    )
  }
}

export default BooksApp
