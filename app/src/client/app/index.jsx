/**
 * Created by dump on 11/10/16.
 */
import React from 'react';
import {render} from 'react-dom';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
import EditableText from './EditableText.jsx';
import EditingText from './EditingText.jsx';

// ...
class App extends React.Component {

    constructor() {
        super();
        this.state = {testText: "test 14", tempText: ''};
        this.editClick = this.handleEditClick.bind(this);
        this.acceptClick = this.handleAcceptClick.bind(this);
        this.cancelClick = this.handleCancelEditClick.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    };

    handleEditClick() {
        this.setState({editing: true});
    }

    handleCancelEditClick() {
        this.setState({editing: false, tempText: ''});
    }

    handleAcceptClick() {
        this.state.testText = this.state.tempText;
        this.setState({editing: false});
    }

    handleUserInput(text) {
        this.setState({
            tempText: text
        });
    }

    render () {
        const editing = this.state.editing;

        let component = null;

        if(editing) {
            component = <EditingText
                text={this.state.tempText}
                value={this.state.testText}
                clickApplyHandler={this.acceptClick}
                clickCancelHandler={this.cancelClick}
                onUserInput={this.handleUserInput}
            />
        } else {
            component = <EditableText
                text={this.state.testText}
                clickHandler={this.editClick}
            />
        }

        return (
            <div>{component}</div>
        );
    }
}

render(<App/>, document.getElementById('app'));