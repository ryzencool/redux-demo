import React, { Component } from "react";
import { connect } from "react-redux";
import { postLogin } from "../actions/postLogin";

class PostLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleInputOnChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleButtonClick() {
    this.props.handlePostLogin();
  }

  render() {
    // const content = this.props.data.map(i => <h1>{i}</h1>);
    const content = this.props.data != null ? this.props.data.data : [];
    const renderContent = content.map((it, index) => <h1 key={index}>{it.avatar}</h1>);
    return (
      <div>
        <input
          value={this.state.username}
          onChange={this.handleInputOnChange.bind(this)}
        />
        <button onClick={this.handleButtonClick.bind(this)}>点击我</button>
        <div>{renderContent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.postLogin.items
});

const mapDispatchToProps = dispatch => {
  return {
    handlePostLogin: () => {
      dispatch(postLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLogin);
