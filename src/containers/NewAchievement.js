import React from 'react'
import { connect } from 'react-redux'

import { addAchievement } from '../actions'

import Input from 'components/Input';

class NewAchievement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    handleAddClick = (e) => {
        e.preventDefault()
        
        if (!this.state.text.trim()) {
            return;
        }
        
        this.props.addAchievement({ text: this.state.text, owner_id: '5be843d7dced5f4062d13351' });

        this.input.focus();
        this.setState({ text: '' });
    }

    onInputChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleAddClick}>
                <Input
                    value={this.state.text}
                    ref={input => this.input = input}
                    onChange={this.onInputChange}
                />
                <a className="add-btn" href="#" onClick={this.handleAddClick}>
                    +
                </a>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addAchievement,
}

NewAchievement = connect(null, mapDispatchToProps)(NewAchievement)

export default NewAchievement;
