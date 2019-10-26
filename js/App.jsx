import React from 'react';
import Header from './Header.jsx';
import Inventory from './Inventory.jsx';
import Order from './Order.jsx';
import AdminPanel from './AdminPanel.jsx';



class App extends React.Component {


    state = {
        books: [],
        order: [],
    };


    addNewBook = (book) => {

        let newBooks = [...this.state.books];

        newBooks.push(book);

        this.setState({
          books: newBooks
        })
    };

    addToOrder = (book) => {
        this.setState({
            order: [...this.state.order, book]
        })
    };


    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter( book => title !== book.name)
        })
    };


    render() {
        return (
            <div>
                <Header/>
                <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
            </div>
        )
    }
}

export default App;