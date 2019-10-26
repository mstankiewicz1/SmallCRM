import React from 'react';



class OrderView extends React.Component {



    render() {
        return (
            <div className="orderView">
                <p>{this.props.book.name}</p>
                <button onClick={() => this.props.removeFromOrder(this.props.book.name)}>Usuń</button>
            </div>
        )
    }
}

export default OrderView;