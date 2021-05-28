import React, { useState } from 'react';
import './style.css';

const Book = ({ id, title, author, year, cover, read, handleUpdate }) => {
  //const [precteno, setPrecteno] = useState(read);

  /*const handleClick = () => {
    setPrecteno(!precteno);
  };*/

  const handleClick = () => {
    handleUpdate(id);
  };

  return (
    <div className="book">
      <img
        className="book__cover"
        src={`/assets/book-covers/${cover}`}
        alt="title"
      />
      <div className="book__details">
        <h2 className="book__title">{title}</h2>
        <p className="book__meta">
          {author}, {year}
        </p>

        <button className="book__read" onClick={handleClick}>
          {read ? 'přečteno' : 'nepřečteno'}
        </button>
      </div>
    </div>
  );
};

export default Book;
