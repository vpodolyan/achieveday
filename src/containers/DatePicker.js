import React, { PropTypes } from 'react';
import { localeUtils } from '../utils/i18n'

import DayPicker from 'react-day-picker'
import '../../node_modules/react-day-picker/lib/style.css'

import { NEXT_DATE, PREV_DATE } from '../../src/actions/types'


export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
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

    onArrowMouseDown(e, direction) {
        if (direction === PREV_DATE) {
            console.log("CLICK")
            this.setState({ value: new Date(new Date() - 86400000), visible: this.state.visible })

            this.refs.input.value = this.state.value.toLocaleDateString()
        }
    }

    render() {
        return (
            <div className='date-picker no-borders' onMouseDown={(e) => this.onContainerMouseDown(e)}>
                <span className="date-picker__arrow date-picker__arrow-left" onClick={(e) => this.props.onDateSwitch(PREV_DATE) }> &lt; </span>
                <input type='text'
                    className='date-picker__input no-borders text-center'
                    ref='input'
                    value={this.props.selectedDate.value.toLocaleDateString()}
                    onFocus={(e) => this.onInputFocus(e) }
                    onBlur={(e) => this.onInputBlur(e) }
                />
                <span className="date-picker__arrow date-picker__arrow-right" onClick={(e) => this.props.onDateSwitch(NEXT_DATE) }> &gt; </span>
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

DatePicker.propTypes = {
    selectedDate: PropTypes.shape({
        value: PropTypes.objectOf(Date)
    }),
    onDateSwitch: PropTypes.func.isRequired
}
