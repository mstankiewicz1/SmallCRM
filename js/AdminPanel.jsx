import React from 'react';



class AdminPanel extends React.Component {



    render() {
        return (
            <div className="adminPanel">
                <form>
                    <input type="text" placeholder="Wpisz nazwę książki"/>
                    <input type="text" placeholder="Wpisz autora"/>
                    <textarea placeholder="Wpisz opis książki"/>
                    <input type="checkbox" id="available"/>
                    <label form="available">Dostępna</label>
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;