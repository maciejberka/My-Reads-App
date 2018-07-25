import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book';

class SearchBooks extends React.Component {
  
  render(){

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.props.getQuery}/>
          </div>
        </div>      
        <div className="search-books-results">

          {this.props.searchResults !== undefined && this.props.searchResults.length > 0 && (
            <ol className="books-grid">

              {this.props.searchResults.map(function(book){
                //console.log(book.shelf)

                this.props.books.map(function(bookOnShelf){
                  
                  if(book.id === bookOnShelf.id){
                    book.shelf = bookOnShelf.shelf
                  }
                  //Break
                  return true

                }, this)
                
                return (
                  <li key={book.id}>
                    <Book
                      bookObject = {book}
                      title={book.title}
                      author={book.authors}
                      shelf = {book.shelf}
                      changeShelf = {this.props.changeShelf}
                    />
                  </li>
                )                   
              }, this)}

            </ol>
          )}
                    
        </div>
      </div>
    )
  }
}

export default SearchBooks