import React, { Component } from "react";
import { connect } from "react-redux";
import { postLogin } from "../actions/postLogin";
import { Button, Input, Row, Col, Table } from "antd";

class PostLogin extends Component {
  constructor() {
    super();
    this.state = {
      page: ""
    };
  }

  handleInputOnChange(e) {
    this.setState({
      page: e.target.value
    });
  }

  handleButtonClick() {
    this.props.handlePostLogin(this.state.page);
  }

  render() {
    const content = this.props.data != null ? this.props.data.data : [];
    const renderContent = content.map((it, index) => (
      <h1 key={index}>{it.avatar}</h1>
    ));
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "first_name",
        dataIndex: "first_name",
        key: "first_name"
      },
      {
        title: "last_name",
        dataIndex: "last_name",
        key: "last_name"
      },
      {
        title: "avatar",
        dataIndex: "avatar",
        key: "avatar"
      }
    ];
    return (
      <div>
        <Row>
          <Col span={6} offset={6}>
            <Input
              placeholder="请输入你想要查询的页码(1-4之间)"
              value={this.state.page}
              onChange={this.handleInputOnChange.bind(this)}
            />
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={this.handleButtonClick.bind(this)}>
              点点点...
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table columns={columns} dataSource={content} rowKey= {it => it.id}/>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.postLogin.items
});

const mapDispatchToProps = dispatch => {
  return {
    handlePostLogin: page => {
      dispatch(postLogin(page));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLogin);
