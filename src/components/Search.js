import React from "react";

function Search({ setFieldInput, fieldInput }) {
  function handleChange(e) {
    setFieldInput(e.target.value)
  };
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={fieldInput}
        onChange={handleChange}

      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
