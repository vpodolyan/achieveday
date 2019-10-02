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

        const { addAchievement, user } = this.props;

        if (!user) {
            return;
        }
        
        addAchievement({ text: this.state.text, owner_id: user.id });

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

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapDispatchToProps = {
    addAchievement,
}

NewAchievement = connect(mapStateToProps, mapDispatchToProps)(NewAchievement)

export default NewAchievement;
