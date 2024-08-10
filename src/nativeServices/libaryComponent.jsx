import React from 'react';
import Sidebar from "../components/sidebar/sidebar";
import './libary.css'; 
const books = [
  {
    title: 'Book 1',
    cover: '/covers/cover1.jpg',
    file: '/books/book1.pdf',
  },
  {
    title: 'Book 2',
    cover: '/covers/cover2.jpg',
    file: '/books/book2.pdf',
  },
];

const OnlineBooks = () => {
  return (
    <div className="books-container">
         <Sidebar/>
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
