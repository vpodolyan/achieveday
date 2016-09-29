import React from 'react';
import { connect } from 'react-redux'
import { localeUtils } from '../utils/i18n'

import DayPicker from 'react-day-picker'
import '../../node_modules/react-day-picker/lib/style.css'

class DatePicker extends React.Component {
    constructor() {
        super();

        this.state = {
            value: new Date(),
            visible: false
        }
    }

    componentWillUnmount() {
      clearTimeout(this.clickTimeout);
    }

    onInputFocus() {
        this.setState({
            ...this.state,
            visible: true
        });
    }

    onContainerMouseDown() {
        this.clickedInside = true
        // The input's onBlur method is called from a queue right after onMouseDown event.
        // setTimeout adds another callback in the queue, but is called later than onBlur event
        this.clickTimeout = setTimeout(() => {
            this.clickedInside = false
        }, 0);
    }

    onInputBlur() {
        const visible = this.clickedInside;

        this.setState({ ...this.state, visible })

        // Force input's focus if blur event was caused by clicking on the calendar
        if (visible) {
          this.refs.input.focus()
        }
    }

    onDayClick(e, day) {
        // const { dispatch, field } = this.props;

        const date = day.toLocaleDateString()
        this.refs.input.value = date

        // dispatch(updateDocument(field, date))

        this.setState({ value: day, visible: false })
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div className='date-picker no-borders' onMouseDown={(e)=> this.onContainerMouseDown(e)}>
                <input type='text'
                    className=''
                    ref='input'
                    value={this.state.value.toLocaleDateString()}
                    onFocus={(e) => this.onInputFocus(e) }
                    onBlur={(e) => this.onInputBlur(e) }
                />
                { this.state.visible &&
                    <div style={{ position: 'relative' }}>
                        <DayPicker className='date-picker__calendar'
                            ref='daypicker'
                            locale={'en'}
                            localeUtils={localeUtils}
                            onDayClick={(e, day) => this.onDayClick(e, day)}
                         />
                    </div>
                }
            </div>


        )
    }
}

DatePicker = connect()(DatePicker)

export default DatePicker
