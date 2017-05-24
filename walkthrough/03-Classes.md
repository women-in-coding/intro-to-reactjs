Components can also be implemented using classes. Class-based components have a `render` method which returns JSX.

The following two components do the same thing:

``` javascript
class Hello extends React.Component {
  render() {
    return <div>Hello, World!</div>
  }
}
```

``` javascript
function Hello() {
  return <div>Hello, World!</div>
}
```

The `extends` keyword allows one class to inherit from another. For a simple example:

``` javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, my name is ${this.name}`)
  }
}

class Dog extends Animal {
  sayHi() {
    console.log(`Woof, my name is ${this.name}`)
  }
}

const dave = new Animal('Dave');
dave.sayHi(); // Hi, my name is Dave

const rufus = new Dog('Rufus');
rufus.sayHi(); // Woof, my name is Rufus
```

[Try it out on CodePen!](https://codepen.io/jshanley/pen/JNxEoo)

This is a silly, contrived example.. but it shows how the `Dog` class can inherit some behavior from the `Animal` class. In this case, the behavior is to store the name that is provided in the constructor.

In the same way, we can create components that inherit the behavior of the `React.Component` class.
