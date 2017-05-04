import React from 'react'
import { connect } from 'react-redux'
import { addAchievement } from '../actions'

import Input from 'components/Input';

class NewAchievement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    onAddClick = (e) => {
        e.preventDefault()
        
        if (!this.state.text.trim()) {
            return;
        }
        
        this.props.dispatch(addAchievement(this.state.text));
        this.input.focus();
        this.setState({ text: '' });
    }

    onInputChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onAddClick}>
                <Input
                    value={this.state.text}
                    innerRef={input => this.input = input}
                    onChange={this.onInputChange}
                />
                <a className="add-btn" href="#" onClick={this.onAddClick}>
                    +
                </a>
                </form>
            </div>
        )
    }
}
NewAchievement = connect()(NewAchievement)

export default NewAchievement
