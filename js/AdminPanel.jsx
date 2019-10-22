import React from 'react';



class AdminPanel extends React.Component {


    state = {
      book: {
          name: "",
          author: "",
          description: "",
          check: true
        },
        books: []
    };


    handleChange = (e) => {

        let newBook;

        if (e.target.name === "check"){
            newBook = {
                ...this.state.book,
                [e.target.name]: e.target.checked,
            };
        }else {
            newBook = {
                ...this.state.book,
                [e.target.name]: e.target.value,
            };
        }
        this.setState({
            book: newBook
        })
    };

    addNewBook = (e) => {

        e.preventDefault();

        let newBooks = [...this.state.books];

        let newBook = {...this.state.book};

        newBooks.push(newBook);

        this.setState({
            books: newBooks,
            book: {
                name: "",
                author: "",
                description: "",
                check: true
            },
        });
    };


    render() {
        return (
            <div className="adminPanel">
                <form onSubmit={this.addNewBook}>
                    <input type="text" name="name" placeholder="Wpisz nazwę książki" value={this.state.book.name}
                           onChange={this.handleChange}/>
                    <input type="text" name="author" placeholder="Wpisz autora" value={this.state.book.author}
                           onChange={this.handleChange}/>
                    <textarea name="description" placeholder="Wpisz opis książki" value={this.state.book.description}
                           onChange={this.handleChange}/>
                    <input type="checkbox" name="check" id="available" value={this.state.book.check}
                           onChange={this.handleChange}/>
                    <label htmlFor="available">Dostępna</label>
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;