import React, { useState } from "react";

function Search({ handleChange, setFieldInput }) {

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={fieldInput}
        onChange={(e) => {handleChange(e)}}

      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
