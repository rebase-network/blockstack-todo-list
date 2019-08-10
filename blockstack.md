### 第一步

```
create-react-app blockstack-todo-list
```

### 第二步

```js
// app.js

import React from "react"

class App extends React.Component {
  render() {
    return <div>Nice Meme</div>
  }
}

export default App
```


```js
// index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

#### Prettier

https://www.npmjs.com/package/prettier

`echo "{}" > .prettierrc`


#### Semantic UI

`http://cdn.staticfile.org/semantic-ui/2.4.1/semantic.min.css`

`<link rel="stylesheet" href="http://cdn.staticfile.org/semantic-ui/2.4.1/semantic.min.css"/>`

### 第三步


###