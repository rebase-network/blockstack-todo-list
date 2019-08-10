import React from "react"

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Wash the dishes",
        done: false,
      },
      {
        id: 2,
        title: "Clean my room",
        done: false,
      },
    ],
  }

  render() {
    return (
      <div style={{ padding: "30px 0" }}
          className="ui text container center aligned">
          <h2>My Todos</h2>
          <div className="ui grid">
            <div className="row centered">
              <div className="column twelve wide">
                <div className="grouped fields">
                  {this.state.todos
                    .filter(todo => !todo.done)
                    .map(todo => (
                      <div key={todo.id} className="field">
                        <div className="ui checkbox">
                          <input type="checkbox" />
                          <label>{todo.title}</label>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;