import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../actions';

const BookForm = ({ book, isEditing }) => {
    const [title, setTitle] = useState(book ? book.title : '');
    const [author, setAuthor] = useState(book ? book.author : '');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(editBook({ ...book, title, author }));
        } else {
            dispatch(addBook({ id: Date.now(), title, author }));
        }
    };

    return (
        <div>
<form onSubmit={handleSubmit} >
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book Title"
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
            />
            <button type="submit">{isEditing ? 'Edit' : 'Add'} Book</button>
        </form>

        </div>
        
    );
};

export default BookForm;
