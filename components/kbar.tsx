import React from 'react';

const KBar = () => {
  return (
    <div className="kbar">
      <input type="text" placeholder="Search..." />
      <button className="k-button">
        <span className="command-symbol">⌘</span>
        <span className="k-letter">K</span>
      </button>
    </div>
  );
};

export default KBar;