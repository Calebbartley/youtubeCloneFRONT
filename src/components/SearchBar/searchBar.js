import React, { useState } from "react";

function SearchBar(props) {
  const [search, setInput] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting search ${search}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search
        <input
          type="text"
          value={search}
          onChange={e => setInput(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;