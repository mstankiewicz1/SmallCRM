import React from 'react';
import OrderView from './OrderView.jsx';


class Order extends React.Component {



    render() {

        const orderedBooks = this.props.order.map( order => {
            return <OrderView key={order.name} book={order} removeFromOrder={this.props.removeFromOrder}/>
        });


        return (
            <div className="order">
                {orderedBooks}
            </div>
        )
    }
}

export default Order;