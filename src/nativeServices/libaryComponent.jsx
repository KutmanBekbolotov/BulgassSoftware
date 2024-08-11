import React from 'react';
import Sidebar from "../components/sidebar/sidebar";
import Cbook from "../assets/bookCover/Cbook.png";
import DockerDeepDiveCover from "../assets/bookCover/DockerDeepDive.jpg"; // No need to import PDF
import reactBook from "../assets/bookCover/reactBook.jpg";
import Docker from "../assets/books/Docker.pdf";
import LearnReact from "../assets/books/LearnReact.pdf";
import LearnC from "../assets/books/LearnC.pdf";
import './libary.css';

const books = [
  {
    title: 'Learn C',
    cover: Cbook,
    file: LearnC, // Correct path
  },
  {
    title: 'Docker Deep Dive',
    cover: DockerDeepDiveCover,
    file: Docker, // Correct path
  },
  {
    title: 'React Book',
    cover: reactBook,
    file: LearnReact,
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
          <p className='book-name'>{book.title}</p>
          <a href={book.file} download className="download-button">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default OnlineBooks;
