import React from 'react';



class Header extends React.Component {


    state = {
              SmallCRMName: 'Black Books',
              clicked: true,
              textColor: 'white',
              backgroundColor: 'black',
        };


    handleClick = () => {

        if (this.state.clicked) {
            this.setState({
                SmallCRMName: 'White Books',
                clicked: !this.state.clicked,
                textColor: 'white',
                backgroundColor: 'black',
            })
        } else {
            this.setState({
                SmallCRMName: 'Black Books',
                clicked: !this.state.clicked,
                textColor: 'black',
                backgroundColor: 'white',
            })
        }
    };



    render() {

        let styleCss = {
          color: this.state.textColor,
          backgroundColor: this.state.backgroundColor,
        };

        return (
            <div className="header" style={styleCss} onClick={this.handleClick}>
                <h1>{this.state.SmallCRMName}</h1>
            </div>
        )
    }
}

export default Header;