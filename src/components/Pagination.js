const Pagination = ({ booksPerPage, totalBooks, paginate, handleBooksPerPage }) => {
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++){
        pageNumbers.push(i);
    }

    return (  
        <nav className="pagination-wrapper">
            <ul className="page-search w-50 mx-auto">
                { pageNumbers.length > 1 && pageNumbers.map(number => (
                    <li key={number} className="item">
                        <i onClick={() => paginate(number)} href="!#" className="link">
                            {number}
                        </i>
                    </li>
                ))}
            </ul>
            <ul className="set-pages">
                <li className="item"><i className="show-per-page" onClick={() => handleBooksPerPage(5)}href="">05</i></li>
                <li className="item"><i className="show-per-page" onClick={() => handleBooksPerPage(10)}href="">10</i></li>
                <li className="item"><i className="show-per-page" onClick={() => handleBooksPerPage(15)}href="">15</i></li>
                <li className="item"><i className="show-per-page" onClick={() => handleBooksPerPage(20)}href="">20</i></li>
            </ul>
            
        </nav>
    );
}
 
export default Pagination;