import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ history, selected, count, deleteUser }) => {
  const displayUserCount = () => {
    if (selected.length) return `${selected.length} of ${count} users selected`;
    else {
      return count === 1 ? `1 user` : `${count} users`;
    }
  };
  return (
    <div className="search-bar">
      <button className="cta-btn circle" onClick={() => history.push('/users/add')}>
        <i className="material-icons">add</i>
      </button>
      <div className="search-wrapper">
        <input type="search" placeholder="Search" />
        <button>Filter By</button>
      </div>
      <span className="user-count">{displayUserCount()}</span>
      <button disabled className="cta-btn success">
        resend email
      </button>
      <button disabled={!selected.length} className="cta-btn warn" onClick={deleteUser}>
        delete
      </button>
      <button disabled className="cta-btn default">
        more actions
      </button>
    </div>
  );
};

export default SearchBar;
