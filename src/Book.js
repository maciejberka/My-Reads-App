import React from 'react'
import './App.css'
import PlaceHolder from './icons/book_placeholder.png';

class Book extends React.Component {

  render(){   

    return(
        
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookObject.imageLinks ? this.props.bookObject.imageLinks.thumbnail : PlaceHolder})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.props.changeShelf(this.props.bookObject, event.target.value)}
                defaultValue={this.props.shelf || 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">
            {this.props.author ? this.props.author.join(', ') : ''}
          </div>
        </div>
      
    )  
  
  }

}

export default Book