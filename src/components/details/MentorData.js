import React, { Component } from 'react';
import TableList from './tableData/TableList';
import MentData from './mentor.json';

class LearnerData extends Component {

    state = {
        data: [...MentData],
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
            <div className="container" style={{marginTop: '70px'}}>
                <div  className="addlist_form_heading">Mentor Data</div>
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
                            name: "Address",
                            prop: "address"
                        },
                        {
                            name: "Technology",
                            prop: "technology"
                        }
                    ]}
                />
            </div>
        );
    }
}

export default LearnerData;