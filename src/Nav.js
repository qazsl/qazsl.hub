import React, { useState } from 'react';
import './Nav.css'

function Nav({ алфавит, загрузитьВидео }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Обработка функционала поиска здесь, например, вызов функции загрузитьВидео с поисковым запросом
    // Пример: загрузитьВидео(searchTerm);
    console.log("Ізделуде:", searchTerm);
  };

  return (
      <div>
        <nav>
        <form className='search-form' onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Іздеу..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button id='search-button' type="submit">Іздеу</button>
        </form>
        </nav>
      </div>
  );
}

export default Nav;
