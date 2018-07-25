import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks';
import Bookshelves from './Bookshelves';

class BooksApp extends React.Component {
  
  state = {
    booksOnShelves: [],
    searchFor: '',
    searchResults: []
  }
  
  // Get all books with assigned shelf and save them in this.state.booksOnShelves
  updateBooksOnShelves = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ booksOnShelves: books });
      })
  }

  // Use this function to change shelf of book
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateBooksOnShelves();
    }).catch(error => console.log(error));
  };
  
  searchByQuery = (query) => {
    BooksAPI.search(query).then(searchResults => {
      this.setState({searchResults: searchResults});
      console.log(this.state.searchResults)
    })
  }

  getQuery = (e) => {
    this.setState({searchFor: e.target.value});
    console.log(this.state.searchFor);
    this.searchByQuery(this.state.searchFor)
  }

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
            <SearchBooks
              getQuery = {this.getQuery}
              searchFor = {this.state.searchFor}
              searchResults = {this.state.searchResults}
              changeShelf = {this.changeShelf}
              books = {this.state.booksOnShelves}
            />
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
