**Props** are the inputs to your component. They are the component's interface to the outside world.

For a functional component, the props are passed as the first argument:

``` javascript
function Hello(props) {
  return <div>Hello, {props.name}!</div>
}

ReactDOM.render(
  <Hello name="Amy" />,
  document.getElementById('react-mount')
);
```

[Try it out on CodePen!](https://codepen.io/jshanley/pen/gWqxgZ)

A few things to note above. The `props` values are provided on the custom tag, which is an **instance** of the component. This is similar to adding attributes to an HTML tag. You can use JavaScript expressions in JSX by placing them in curly braces (such as `{props.name}` above).
