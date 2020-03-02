import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { updateData } from "../store/actions/index.action";
import DataPrint from "./dataPrint";
class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popState: false,
            title: "",
            desc: "",
            id: "",
            data: {}
        };
    }
    title = event => {
        this.setState({
            title: event.target.value
        });
    };
    desc = event => {
        this.setState({
            desc: event.target.value
        });
    };
    fieldBlank = () => {
        this.setState({
            title: "",
            desc: ""
        });
    };
    editData = values => {
        this.setState({
            title: values.title,
            desc: values.desc,
            id: values._id
        });
    };

    update = () => {
        this.props.$updateData({
            desc: this.state.desc,
            title: this.state.title,
            _id: this.state.id
        });
        this.fieldBlank();
    };

    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1>Crud operation</h1>
                    <div className="container tableTitle">
                        <div className="row justify-content-md-center">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label>title:</label>
                                    <input
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        type="text"
                                        value={this.state.title}
                                        onChange={this.title}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label>Desc</label>
                                    <input
                                        className="form-control"
                                        id="desc"
                                        name="desc"
                                        type="text"
                                        value={this.state.desc}
                                        onChange={this.desc}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="btn btn-success updateBtn"
                        onClick={this.update}
                    >
                        Update
                    </button>
                </div>
                <DataPrint
                    data={{ desc: this.state.desc, title: this.state.title }}
                    fieldBlank={this.fieldBlank}
                    onEdit={this.editData}
                />
            </React.Fragment>
        );
    }
}

// export default AddData;

const mapState = ({ updateData }) => {
    return {
        _updateData: updateData
    };
};
const mapDispatch = dispatchEvent => ({
    $updateData: values => dispatchEvent(updateData(values))
});
export default connect(
    mapState,
    mapDispatch
)(AddData);
