import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Book Management System</h1>
                <BookForm />
                <BookList />
            </div>
        </Provider>
    );
}

export default App;
