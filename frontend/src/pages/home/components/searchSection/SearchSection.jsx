import './SearchSection.css'

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="search-text">
        <h1 className="search-title">
          Find a domain name for <br /> your website
        </h1>
      </div>

      <div className="search-input-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search for domain"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
