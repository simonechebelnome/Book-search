import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        book: state.book
    }
}

const Details = (props) => {
    let navigate = useNavigate();
    // console.log(props.book);
    
    const handleChangePage = () => {
        navigate(-1);
    }

    return (
        <React.Fragment>
            <div className='book-details'>
                <h2 className='book-title'>{props.book.volumeInfo.title}</h2>
                <h3 className='book-link'><a href={props.book.volumeInfo.infoLink} target="_blank">Info-Link</a></h3>
            </div>
            <button className='change-page-button' onClick={() => handleChangePage()}>
                Go Back
            </button>
        </React.Fragment>
    );
}
 
export default connect(mapStateToProps)(Details);