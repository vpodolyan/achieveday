import * as React from 'react'
import { connect } from 'react-redux'

import { addAchievement } from 'actions'

import Input from 'components/Input';

interface IProps {
    user: any,
    addAchievement: typeof addAchievement;
}

interface IState {
    text: string;
}

class NewAchievement extends React.PureComponent<IProps, IState> {
    state = { text: '' };

    input: HTMLInputElement | null;

    handleAddClick = (e) => {
        e.preventDefault();
        
        if (!this.state.text.trim()) {
            return;
        }

        const { addAchievement, user } = this.props;

        if (!user) {
            return;
        }
        
        addAchievement({ text: this.state.text, owner_id: user.id });

        if (this.input) {
            this.input.focus();
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(NewAchievement);
