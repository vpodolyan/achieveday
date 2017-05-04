import PropTypes from 'prop-types';
import React from 'react';

import DayPicker from 'react-day-picker'

import { localeUtils } from 'utils/i18n'
import { NEXT_DATE, PREV_DATE } from 'actions/types'
import Arrow from 'components/Arrow';
import CentredBox from 'components/CentredBox';
import Input from 'components/Input'

import 'react-day-picker/lib/style.css'

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillUnmount() {
      clearTimeout(this.clickTimeout);
    }

    onInputFocus() {
        this.props.setCalendarVisibility(true)
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

        // Force input's focus if blur event was caused by clicking on the calendar
        if (visible) {
          this.refs.input.focus()
        }

        this.props.setCalendarVisibility(visible)
    }

    render() {
        return (
            <div>
                <Arrow onClick={(e) => this.props.onDateSwitch(PREV_DATE) }> &lt; </Arrow>
                <Input
                    type='text'
                    className='text-center'
                    ref={input => input}
                    value={this.props.selectedDate.toLocaleDateString()}
                    onFocus={(e) => this.onInputFocus(e) }
                    onBlur={(e) => this.onInputBlur(e) }
                />
                <Arrow onClick={(e) => this.props.onDateSwitch(NEXT_DATE) }> &gt; </Arrow>
                { this.props.visible &&
                    <CentredBox>
                        <DayPicker
                            locale={'en'}
                            localeUtils={localeUtils}
                            onDayClick={(e, day) => this.props.onDateSelected(day)}
                            onMouseDown={(e) => this.onContainerMouseDown(e)}
                         />
                    </CentredBox>
                }
            </div>
        )
    }
}

DatePicker.propTypes = {
    selectedDate: PropTypes.shape({
        value: PropTypes.objectOf(Date)
    }),
    onDateSwitch: PropTypes.func.isRequired,
    onDateSelected: PropTypes.func.isRequired
}
