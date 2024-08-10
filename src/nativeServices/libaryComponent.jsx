import React from 'react';
import Sidebar from "../components/sidebar/sidebar";
import Cbook from "../assets/bookCover/Cbook.png";
import DockerDeepDive from "../assets/bookCover/DockerDeepDive.jpg"
import reactBook from "../assets/bookCover/reactBook.jpg"
import './libary.css'; 
const books = [
  {
    title: 'Learn C',
    cover: Cbook,
    file: '/books/book1.pdf',
  },
  {
    title: 'Docker Deep Dive',
    cover: DockerDeepDive,
    file: '/books/book2.pdf',
  },
  {
    title: 'React Book',
    cover: reactBook,
    file: '/books/book3.pdf'
  }
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
