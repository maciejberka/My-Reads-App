import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book';

class Bookshelves extends React.Component {
 
  componentDidMount(){
    // It gives me an empty Array. Why?
    console.log(this.props.books)
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* Book component here? */}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* Book component here? */}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* Book component here? */}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
    
  }

}
export default Bookshelves