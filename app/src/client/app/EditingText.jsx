/**
 * Created by dump on 11/23/16.
 */

import React from 'react';

export default class EditingText extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value,
        );
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.props.text.length ? this.props.text : this.props.value}
                       ref={(input) => this.filterTextInput = input}
                       onChange={this.handleChange}
                />
                <button onClick={this.props.clickApplyHandler}>Apply</button>
                <button onClick={this.props.clickCancelHandler}>Cancel</button>
            </div>
        );
    }

}
