import React from 'react';



class AdminPanel extends React.Component {


    state = {
      book: {
          name: "",
          author: "",
        }
    };


    handleChange = (e) => {

        let newBook = {
          [event.target.name]: e.target.value,
        };

        this.setState({
            book: newBook
        })
    };



    render() {
        return (
            <div className="adminPanel">
                <form>
                    <input type="text" name="name" placeholder="Wpisz nazwę książki" value={this.state.book.name}
                           onChange={this.handleChange}/>
                    <input type="text" name="author" placeholder="Wpisz autora"
                           onChange={this.handleChange}/>
                    <textarea placeholder="Wpisz opis książki"
                           onChange={this.handleChange}/>
                    <input type="checkbox" id="available"
                           onChange={this.handleChange}/>
                    <label htmlFor="available">Dostępna</label>
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;