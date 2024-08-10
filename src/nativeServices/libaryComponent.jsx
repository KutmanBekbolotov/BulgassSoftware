import React from 'react';
import Sidebar from "../components/sidebar/sidebar";
import Cbook from "../assets/bookCover/Cbook.png";
import DockerDeepDiveCover from "../assets/bookCover/DockerDeepDive.jpg"; // No need to import PDF
import reactBook from "../assets/bookCover/reactBook.jpg";
import './libary.css';

const books = [
  {
    title: 'Learn C',
    cover: Cbook,
    file: '/assets/books/learnC.pdf', // Correct path
  },
  {
    title: 'Docker Deep Dive',
    cover: DockerDeepDiveCover,
    file: '/assets/books/DockerDeepDive.pdf', // Correct path
  },
  {
    title: 'React Book',
    cover: reactBook,
    file: '/assets/books/reactBook.pdf',
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
