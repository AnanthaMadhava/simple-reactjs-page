import React, { Component } from 'react';
import TableList from './tableData/TableList';
import LearData from './learner.json';

class LearnerData extends Component {

    state = {
        data: [...LearData],
        editIdx: -1
    }

    handleRemove = (i) => {
        this.setState(state => ({
            data: state.data.filter((x, j) => j !== i),
        }));
    }

    startEditing = i => {
        this.setState({ 
            editIdx: i 
        });
    }

    stopEditing = () => {
        this.setState({ 
            editIdx: -1 
        });
    }

    handleChange = (e, name, i) => {
        const { value } = e.target;
        this.setState(state => ({
            data: state.data.map(
            (row, j) => (j === i ? { ...row, [name]: value } : row)
            )
        }));
    }

    render() {
        return (
            <div className="container" style={{marginTop: '120px'}}>
                <div  className="addlist_form_heading">Learner Data</div>
                <TableList
                    startEditing={this.startEditing}
                    handleRemove={this.handleRemove}
                    editIdx={this.state.editIdx}
                    handleChange={this.handleChange}
                    stopEditing={this.stopEditing}
                    data={this.state.data}
                    header={[
                        {
                            name: "Id",
                            prop: "id"
                        },
                        {
                            name: "Name",
                            prop: "name"
                        },
                        {
                            name: "Email",
                            prop: "email"
                        },
                        {
                            name: "Phone",
                            prop: "phone"
                        },
                        {
                            name: "Alternate Phone",
                            prop: "alterPhone"
                        },
                        {
                            name: "Primary Skills",
                            prop: "primary"
                        },
                        {
                            name: "Secondary Skills",
                            prop: "secondary"
                        },
                        {
                            name: "Address",
                            prop: "address"
                        },
                        {
                            name: "DOJ",
                            prop: "doj"
                        }
                    ]}
                />
            </div>
        );
    }
}

export default LearnerData;