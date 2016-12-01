'use strict';
import  React, {Component, PropTypes} from 'react';
import {
    Text
} from 'react-native';

import eases from 'eases';
import TimerMixin from 'react-timer-mixin';

export default class NumberEasing extends Component {

    static propTypes = {
        ease: PropTypes.string,
        speed: PropTypes.string,
        value: PropTypes.string.isRequired
    };

    static defaultProps = {
        ease: 'quintInOut',
        speed: '2000',
    };

    constructor(props) {
        super(props);
        this.interval = null;
        this.startAnimationTime = (new Date()).getTime();
        this.state = {
            displayValue: 0
        }
        this.updateNumber = this.updateNumber.bind(this);
    }

    componentDidMount() {
        if (this.props.value == '0' || this.props.value == '00') {
            return;
        }
        this.updateNumber();
    }

    updateNumber() {
        var now = new Date().getTime();
        var elapsedTime = now - this.startAnimationTime;
        var progress = eases[this.props.ease](elapsedTime / this.props.speed);
        if (this.state.displayValue >= this.props.value) {
            this.setState({
                displayValue: this.props.value
            });
            TimerMixin.clearInterval(this.interval);
            return;
        }
        var currentDisplayValue = Math.round((this.props.value - this.state.displayValue) * progress + this.state.displayValue);
        this.setState({
            displayValue: currentDisplayValue
        });
        if (!this.interval) {
            this.interval = TimerMixin.setInterval(this.updateNumber, 10);
        }
    }

    componentWillUnmount() {
        TimerMixin.clearInterval(this.interval);
    }

    render() {
        return <Text style={this.props.style}>
            {this.state.displayValue}
        </Text>
    }

};

module.exports = NumberEasing;
