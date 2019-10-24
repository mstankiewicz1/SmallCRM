import React from 'react';
import Header from './Header.jsx';
import Inventory from './Inventory.jsx';
import Order from './Order.jsx';
import AdminPanel from './AdminPanel.jsx';



class App extends React.Component {


    state = {
        books: [],

    };


    addNewBook = (newBook) => {

        let newBooks = [...this.state.books];

        newBooks.push(newBook);

        this.setState({
          books: newBooks
        })
    };



    render() {
        return (
            <div>
                <Header/>
                <Order/>
                <Inventory books={this.state.books}/>
                <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
            </div>
        )
    }
}

export default App;