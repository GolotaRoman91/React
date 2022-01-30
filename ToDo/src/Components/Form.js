import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    handleInputChange = (evt) => this.setState({title: evt.target.value});
    
    handleButtonClick = () => {
        this.props.addTodo({complete: false, id: Date.now(), title: this.state.title})
        this.setState({title: ''})
    }

    render () {
        return (
            <div>
                <input value={this.state.title} onChange={this.handleInputChange} type="text" placeholder="Type your task"/>
                <input type="button"onClick={this.handleButtonClick} className="button" value="Add task"></input>
            </div>
        )
    }
}

export default Form;
