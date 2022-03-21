import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import axios from 'axios';
import './styles/index.css';

const Home = () => {

  const [books, SetBooks] = useState({ items: [] });

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);

  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = e => {
    setSearchTerm(e.target.value)
  }

  useEffect (() => {  
    if(searchTerm)
      fetchBooks();
  }, [searchTerm])

  // ##### GET Request to the API
  const API_URL = `https://www.googleapis.com/books/v1/volumes`; 

  const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}?q=${searchTerm}&maxResults=${40}&startIndex=${0}`);

    // Trying to access the lenght of the items, if empty the program needs to catch the error
    try {
      if(response.data.items.length)
        SetBooks(response.data);
    } catch(lengthError) {
        console.warn = () => {};
    }
    // console.log(response.data);
  }

  // ##### Pagination

  const indexOfLast = currentPage * booksPerPage;
  const indexOfFirst = indexOfLast - booksPerPage;
  const currentBooks = books.items.slice(indexOfFirst, indexOfLast);

  //change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  //change books per page
  const handleBooksPerPage = value => {
    setBooksPerPage(value);
  }

  const handleButtonClick = () => {    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
  };

  return ( 
    <React.Fragment>
  
      <SearchBar   searchTerm={searchTerm} onInputChange={onInputChange}  />
      <Pagination booksPerPage={booksPerPage} totalBooks={books.items.length} paginate={paginate} handleBooksPerPage={handleBooksPerPage} />
      <BookList   currentBooks={currentBooks}  />

      <section className="button-wrapper">
        <button id="scroll" onClick={handleButtonClick}>
          <i className="material-icons">arrow_upward</i>
        </button>
      </section>
      
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

    </React.Fragment>
  );
}
 
export default Home;