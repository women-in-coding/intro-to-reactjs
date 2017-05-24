We discussed how **Props** are bits of data that are passed to a component from the outside world. There are also times when a component must store some data for its own use. In React, this internal-use-only data is referred to as **State**.

State is created in the constructor of a class-based component, like so:

``` javascript
class CityInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'Syracuse'
    }
  }
  render() {
    return <input type="text" value={this.state.city} />
  }
}
```

In this case, we have a problem... we assigned the `value` of the text input to reflect the state of the component, but we didn't provide any way to change the state, so the input will always say "Syracuse", and we cannot change it.

We say:
"The component is in a _state_ in which the city equals 'Syracuse'"

In order to change the state, we need to create an **Event Handler**, which is a function that will run when the input changes, and can update the state accordingly:

``` javascript
class CityInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: 'Syracuse'
    }
  }

  onCityInputChange(evt) {
    this.setState({
      city: evt.target.value
    })
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.city}
        onChange={evt => this.onCityInputChange(evt)} />
    )
  }

}
```

There's a lot going on here. Let's break it down.

First, we added a prop to the input called `onChange`. The value of this prop is a function, which will be called when the value of the input changes, and passed an **Event** as its argument.

We then pass that event into a method on our class, called `onCityInputChange`. Inside this method we take the event and extract the current input value by asking for `evt.target.value`.

We use the `setState` method of the component to change the state. This is important! We don't just change the value of `this.state`, instead we call a function that updates the state. This way the component knows it needs to re-render.

With all of this together, the input can be changed, and `this.state.city` will always hold the value contained in the text input.
