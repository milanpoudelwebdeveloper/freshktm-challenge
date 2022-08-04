import React from "react";

const SearchContainer = ({ keyword, setKeyword }) => {
  return (
    <div style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search cyptocurrency"
        style={{
          backgroundColor: "white",
          border: "none",
          padding: "12px",
          outline: "none",
          color: "gray",
        }}
      />
    </div>
  );
};

export default SearchContainer;
