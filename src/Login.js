import React from "react"

class Login extends React.Component {
  handleSignIn = () => {
    this.props.userSession.redirectToSignIn() // 登录
  }

  render() {
    return (
      <div
        style={{ padding: "30px 0" }}
        className="ui text container center aligned"
      >
        <h1>Todo List Dapp</h1>
        <p>This is the Blockstack todo list Dapp</p>

        <button className="ui button positive" onClick={this.handleSignIn}>
           通过Blockstack登录
        </button>
      </div>
    )
  }
}

export default Login