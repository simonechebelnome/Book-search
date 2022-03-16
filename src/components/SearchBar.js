import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchTerm, onInputChange }) => {
    return ( 
        <section className="search-bar-wrapper mx-auto w-50">
        <form className="input-group">
          <span className="search-icon input-group-text"><SearchIcon /></span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search for a book..." 
            value={searchTerm}
            onChange={onInputChange} />
        </form>
      </section>
    );
}
 
export default SearchBar;