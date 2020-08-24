import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addAchievement } from 'actions';
import Input from 'components/Input';
import IAppState from 'types/state/IAppState';
import IUser from 'types/IUser';

const NewAchievementInput = styled(Input)`
    width: 75%;
`;

interface IProps {
    user: IUser;
    date: Date;
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

      const { addAchievement, user, date } = this.props;

      if (!user) {
        return;
      }

      addAchievement({ text: this.state.text, owner_id: user.id, createDate: date });

      if (this.input) {
        this.input.focus();
      }

      this.setState({ text: '' });
    };

    onInputChange = (e) => {
      this.setState({ text: e.target.value });
    };

    render () {
      return (
        <div className="text-center pt-2 pt-md-4">
          <form onSubmit={this.handleAddClick}>
            <NewAchievementInput
              value={this.state.text}
              ref={(input) => { this.input = input; }}
              onChange={this.onInputChange}
            />
            <a className="add-btn" href="#" onClick={this.handleAddClick}>
              +
            </a>
          </form>
        </div>
      );
    }
}

const mapStateToProps = (state: IAppState) => ({
  user: state.user,
  date: state.datePicker.value
});

const mapDispatchToProps = {
  addAchievement
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAchievement);
