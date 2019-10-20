import React from 'react';
import Header from './Header.jsx';
import Inventory from './Inventory.jsx';
import Order from './Order.jsx';
import AdminPanel from './AdminPanel.jsx';



class App extends React.Component {



    render() {
        return (
            <div>
                <h1>SmallCRM</h1>
                <Header/>
                <Inventory/>
                <Order/>
                <AdminPanel/>
            </div>
        )
    }
}

export default App;