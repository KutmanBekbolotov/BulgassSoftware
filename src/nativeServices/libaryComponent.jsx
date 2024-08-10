import React from 'react';
import './onlineBooks.css'; 
const books = [
  {
    title: 'Learn C',
    cover: '/covers/cover1.jpg',
    file: '/books/book1.pdf',
  },
  {
    title: 'Docker Deep Dive',
    cover: '/covers/cover2.jpg',
    file: '/books/book2.pdf',
  },
];

const OnlineBooks = () => {
  return (
    <div className="books-container">
      {books.map((book, index) => (
        <div className="book-item" key={index}>
          <a href={book.file} target="_blank" rel="noopener noreferrer">
            <img src={book.cover} alt={book.title} className="book-cover" />
          </a>
          <a href={book.file} download className="download-button">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default OnlineBooks;
