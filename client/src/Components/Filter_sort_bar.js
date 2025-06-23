import React from 'react';

function FilterSortBar({ filter, setFilter, setSortBy }) {
  return (
    <div>
      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <label>Sort by: </label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="dueDate">Due Date</option>
      </select>
    </div>
  );
}

export default FilterSortBar;
