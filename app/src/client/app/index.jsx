/**
 * Created by dump on 11/10/16.
 */
import React from 'react';
import {render} from 'react-dom';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

// ...
class App extends React.Component {

    constructor() {
        super();
        this.state = {records: this.generate(1)};
    }

    generate(count) {
        var fname = ['Vitali', 'Katsia', 'John', 'Peter', 'Sue', 'Olivia', 'Thomas', 'Sergei', 'Snehal', 'Avinash', 'Divia'];
        var lname = ['Peterson', 'Rene', 'Johnson', 'Petrov', 'Sannikov', 'Ivanov', 'Smirnov', 'Cuban', 'Twist', 'Sidorov', 'Vasiliev', 'Yadav', 'Vaishnav'];
        var emails = ['Peterson@gmail.com', 'Rene@gmail.com', 'Johnson@gmail.com', 'Petrov@gmail.com', 'Sannikov@gmail.com', 'Ivanov@gmail.com', 'Smirnov@gmail.com', 'Cuban@gmail.com', 'Twist@gmail.com', 'Sidorov@gmail.com', 'Vasiliev@gmail.com', 'Yadav@gmail.com', 'Vaishnav@gmail.com'];
        // add records

        var records = [];
        for (var i = 0; i < count * 1000; i++) {
            records.push({
                recid : i + 1,
                fname: fname[Math.floor(Math.random() * fname.length)],
                lname: lname[Math.floor(Math.random() * lname.length)],
                email: emails[Math.floor(Math.random() * emails.length)]
            });
        }

        return records;
    }

    render () {
        var options = {
            sizePerPageList: [{ text: '10', value: 10 }, { text: '25', value: 25 }, { text: '50', value: 50 }, { text: 100, value: 100 }],
            sizePerPage: 10
        };
        return (
            <div>
                <BootstrapTable options={options} data={this.state.records} striped={true} hover={true} columnFilter={true} pagination={true}>
                    <TableHeaderColumn isKey={true} dataField="recid" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="fname" dataSort={true}>First name</TableHeaderColumn>
                    <TableHeaderColumn dataField="lname" dataSort={true}>Last name</TableHeaderColumn>
                    <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));