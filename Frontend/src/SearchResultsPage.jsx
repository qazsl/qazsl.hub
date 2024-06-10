// SearchResultsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResultsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const data = [
    { id: 1, content: 'На странице "Алфавит" вы можете найти информацию о буквах казахского алфавита, их произношении и использовании в казахском языке.' },
    { id: 2, content: 'Example content 2' },
    // Add more content to search through
  ];

  const results = data.filter(item => item.content.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map(item => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
