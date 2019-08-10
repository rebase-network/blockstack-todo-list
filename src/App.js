import React from "react"
import { UserSession, AppConfig } from "blockstack"
import Login from "./Login"
import TodoList from "./TodoList"
const appConfig = new AppConfig(["store_write"])
const userSession = new UserSession({ appConfig: appConfig })

class App extends React.Component {
  render() {
    return (
      <div>
        {userSession.isUserSignedIn() ? (
          <TodoList userSession={userSession} />
        ) : (
          <Login userSession={userSession} />
        )}
      </div>
    )
  }
}

export default App