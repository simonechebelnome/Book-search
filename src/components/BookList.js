import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => { dispatch({type: 'ADD_BOOK', book: book})}
    }
}

const BookList = (props) => {
    let navigate = useNavigate();

    const handleCardClick = book => {
        props.addBook(book);
        navigate('./details');
    }

    return (
        <section className="book-list-wrapper">
        <div className="card-wrapper">
            { props.currentBooks.length ? props.currentBooks.map((book, index) => <li key={index}>
                <div className="card shadow-sm text-nowrap" onClick={() => handleCardClick(book)}>
                    <img className="card-img-top img-fuild" alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                    <div className="card-body">
                    <h3 className="card-title">{book.volumeInfo.title}</h3>
                    <p className="card-text">{book.volumeInfo.publishedDate}</p>
                    </div>
                </div>
                </li>) : <h3 className="empty-books-text"> Made by Simone Menna</h3>}
        </div>
        </section>
    );
  }

  export default connect(null, mapDispatchToProps)(BookList);