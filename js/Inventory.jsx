import React from 'react';
import BookView from './BookView.jsx';



class Inventory extends React.Component {



    render() {

        const bookListing = this.props.books.map(book => {
            return (
                <BookView book={book} addToOrder={this.props.addToOrder}/>
            )});

        return (
            <div className="inventory">
                {bookListing}
            </div>
        )
    }
}

export default Inventory;