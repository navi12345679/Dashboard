import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Search.css'

const Search = () => {
  const [query, setQuery] = useState('');
  const allWidgets = useSelector(state => state.dashboard.allWidgets);

  const filteredWidgets = allWidgets.filter(widget =>
    widget.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder="Search Widgets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
  <ul> {filteredWidgets.length > 0 ? (
          filteredWidgets.map(widget => (
            <React.Fragment key={widget.id}>
              <li>{widget.name}</li>
             </React.Fragment>
          ))
        ) : (
          <p>No Widget found</p>
        )}
      </ul> 
    </div>
  );
};

export default Search;
