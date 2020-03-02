import React, { Component } from "react";
import { connect } from "react-redux";
import {
    addData,
    fetchData,
    updateData,
    deleteData
} from "../store/actions/index.action";
class DataPrint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.dataAdd = this.dataAdd.bind(this);
    }
    componentDidMount() {
        this.props.$fetchData();
    }
    componentWillReceiveProps(nextprops) {
        // if (nextprops && nextprops._fetchData && nextprops._fetchData.data) {
        //     this.setState({
        //         data: nextprops._fetchData.data
        //     });
        // }
        // if (nextprops && nextprops._addData && nextprops._addData.success) {
        // }
        // if (
        //     nextprops &&
        //     nextprops._updateData &&
        //     nextprops._updateData.success
        // ) {
        //     console.log(
        //         "nextprops._updateData.success",
        //         nextprops._updateData.success
        //     );
        //     this.setState({
        //         data: nextprops._updateData.data
        //     });
        // }
        // if (
        //     nextprops &&
        //     nextprops._deleteData &&
        //     nextprops._deleteData.success
        // ) {
        //     this.setState({
        //         data: nextprops._deleteData.data
        //     });
        // }
        // if (nextprops && nextprops.__crudOperation) {
        //     console.log("nextprops.__crudOperation", nextprops.__crudOperation);
        //     this.setState({
        //         data: nextprops.__crudOperation.data
        //     });
        // }
    }
    dataAdd() {
        if (
            this.props.data.title.length > 0 &&
            this.props.data.desc.length > 0
        ) {
            this.props.$addData(this.props.data);
        }

        this.props.fieldBlank();
    }
    edit(obj) {
        this.props.onEdit(obj);
    }
    delete(obj) {
        this.props.$deleteData(obj);
    }

    render() {
        // const { data } = this.state;

        return (
            <React.Fragment>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col" />
                            <div className="col-5">
                                <button
                                    className="btn btn-primary addBtn"
                                    onClick={this.dataAdd}
                                >
                                    ADD
                                </button>
                            </div>
                            <div className="col" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row tableHeader">
                            <div className="col-sm tableTitle">TITLE</div>
                            <div className="col-sm tableTitle">DESC</div>
                            <div className="col-sm tableTitle">OPERATION</div>
                        </div>
                    </div>
                    <div className="container ">
                        {/* {data &&
                            data.map((obj, index) => ( */}
                        {this.props &&
                            this.props.__crudOperation &&
                            this.props.__crudOperation.data.map(
                                (obj, index) => (
                                    <div className="row data" key={index}>
                                        <div className="col-sm">
                                            {obj.title}
                                        </div>
                                        <div className="col-sm">{obj.desc}</div>
                                        <div className="col-sm">
                                            <button
                                                className="btn btn-primary editBtn"
                                                onClick={() => this.edit(obj)}
                                            >
                                                EDIT
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => this.delete(obj)}
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapState = ({
    fetchData,
    addData,
    updateData,
    deleteData,
    crudOperation
}) => {
    return {
        _fetchData: fetchData,
        _addData: addData,
        _updateData: updateData,
        _deleteData: deleteData,
        __crudOperation: crudOperation
    };
};
const mapDispatch = dispatchEvent => ({
    $fetchData: () => dispatchEvent(fetchData()),
    $addData: values => dispatchEvent(addData(values)),
    $updateData: values => dispatchEvent(updateData(values)),
    $deleteData: values => dispatchEvent(deleteData(values))
});
export default connect(
    mapState,
    mapDispatch
)(DataPrint);
