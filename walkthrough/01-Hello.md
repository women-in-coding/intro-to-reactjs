We started by using `ReactDOM.render` to greet the world using **JSX**, which is like writing HTML in your JavaScript:

``` javascript
ReactDOM.render(
  <div>Hello, World!</div>,
  document.getElementById('react-mount')
)
```

Let's break this up a bit to understand the meaning. The `ReactDOM.render` function takes two arguments, `what` to render, and `where` to render it:

``` javascript
var what = <div>Hello, World</div>
var where = document.getElementById('react-mount')

ReactDOM.render(what, where)
```

Next we learned how to create a custom JSX tag using a function:

``` javascript
function Hello() {
  return <div>Hello, World!</div>
}

ReactDOM.render(
  <Hello />,
  document.getElementById('react-mount')
)
```

A function that returns JSX is called a **Functional Component**. You may also hear the terms **Pure Component** or **Stateless Component**. There is some nuance to those terms, but they are often used interchangeably.
