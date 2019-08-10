import React from "react"
import { Person } from "blockstack"

class TodoList extends React.Component {
  state = {
    todos: [],
    newTodo: "",
    account: null,
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const options = { decrypt: true };
    const file = await this.props.userSession.getFile("todos.json", options); //得到文件数据
    let todos = JSON.parse(file || "[]");

    this.setState({
      todos,
      account: new Person(this.props.userSession.loadUserData().profile), //得到用户数据
    });
  }

  handleCheckboxClick(id) {
    let newTodos = [...this.state.todos];
    newTodos[newTodos.findIndex(todo => todo.id === id)].done = true;
    const options = { encrypt: true };

    this.props.userSession
      .putFile("todos.json", JSON.stringify(newTodos), options) // 推送数据
      .then(() => {
        this.setState({
          todos: newTodos
        });
      });
  }

  handleAddTodoClick = e => {
    e.preventDefault()

    const newTodo = {
      id: this.state.todos.length + 1,
      title: this.state.newTodo,
      done: false,
    }

    const todos = [...this.state.todos]

    todos.push(newTodo)

    const options = { encrypt: true } // 加密文件

    this.props.userSession
      .putFile("todos.json", JSON.stringify(todos), options) // 推送文件
      .then(() => {
        this.setState({
          todos,
          newTodo: "",
        })
      })
  }

  hanldeInputChange = e => {
    this.setState({
      newTodo: e.target.value,
    })
  }

  handleSignout = () => {
    this.props.userSession.signUserOut(window.location.origin) // 登出blockstack
  }

  render() {
    const { account } = this.state;

    return (
      <div style={{ padding: "30px 0" }} className="ui text container center aligned">

        <button className="ui button negative" onClick={this.handleSignout}>
          退出
        </button>

        <h1>{account && account.name()}</h1>
        <img className="ui centered medium rounded image"  style={{height:"200px", width:"200px"}} src={account && account.avatarUrl()} alt="account profile image" />

        <h2>我的 Todos</h2>
        <div className="ui grid">
          <div className="row centered">
            <div className="column twelve wide">
              <form className="ui form" onSubmit={this.handleAddTodoClick}>
                <div className="inline fields">
                  <div className="twelve wide field">
                    <input
                      type="text"
                      value={this.state.newTodo}
                      onChange={this.hanldeInputChange}
                    />
                  </div>
                  <button className="ui button primary" type="submit">
                    添加 Todo
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row centered">
            <div className="column twelve wide">
              <div className="grouped fields">
                {this.state.todos
                  .filter(todo => !todo.done)
                  .map(todo => (
                    <div key={todo.id} className="field">
                      <div className="ui checkbox">
                        <input
                          type="checkbox"
                          onClick={() => {
                            this.handleCheckboxClick(todo.id)
                          }}
                        />
                        <label>{todo.title}</label>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoList