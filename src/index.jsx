import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Book from './Book';

import { books } from './books';

const App = () => {
  const [library, setLibrary] = useState(books);

  const update = (id) => {
    const newLibrary = [].concat(library);
    const book = newLibrary.find((book) => book.id === id);
    book.read = !book.read;
    setLibrary(newLibrary);
  };

  return (
    <>
      <header className="header">
        <h1>Moje knihovnička</h1>
        <div className="icon">
          <img src="./assets/book.svg" alt="ikonka" />
        </div>
      </header>
      <p>Celkem přečteno knih: {library.filter((book) => book.read).length}</p>
      <div className="library">
        {library.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            cover={book.cover}
            read={book.read}
            handleUpdate={update}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
