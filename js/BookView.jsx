import React from 'react';



class BookView extends React.Component {



    render() {
        return (
            <div className="bookView">
                <p>{this.props.book.name}</p>
                <p>{this.props.book.author}</p>
                <p>{this.props.book.description}</p>
                <p>{this.props.book.check}</p>
            </div>
        )
    }
}

export default BookView;