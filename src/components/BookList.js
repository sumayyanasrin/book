import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../actions';

const BookList = () => {
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Book List</h2>
            {books.map(book => (
                <div key={book.id}>
                    <p>{book.title} by {book.author}</p>
                    <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookList;
