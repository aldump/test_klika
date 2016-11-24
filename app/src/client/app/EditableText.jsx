/**
 * Created by dump on 11/23/16.
 */

import React from 'react';

export default class EditableText extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.text}
                <button onClick={this.props.clickHandler}>Edit</button>
            </div>
        );
    }
}
