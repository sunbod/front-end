# What is the difference between state and props in React?

Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to `React.createElement()` or, if you're using JSX, the more familiar tag attributes.

`props` 和 `state` 是相关的。组件的 `state` 经常变成子组件的 `props` 。Props 在父级的 render 方法中作为 React.createElement() 的第二个参数传递给子级，或者，如果您使用 JSX，则为更熟悉的标签属性。

```jsx
<MyChild name={this.state.childsName} />
```

The parent's state value of `childsName` becomes the `child's this.props.name`. From the child's perspective, the name prop is immutable. If it needs to be changed, the parent should just change its internal state:

`childsName` 的父组件的 `state` 值变成子级的 `this.props.name`。从子级的角度来看， `prop` 的名字是不可变的。如果他需要改变，父级应该变更他内部的 `state`:

```jsx
this.setState({childsName: 'New name'});
```

and React will propagate it to the child for you. A natural follow-on question is: what if the child needs to change its name prop? This is usually done through child events and parent callbacks. The child might expose an event called, for example, onNameChanged. The parent would then subscribe to the event by passing a callback handler.

`React` 会为你将其传播给子级。一个自然的后续问题是：如果子级需要更改其 name prop 怎么办？这通常是通过子事件和父回调完成的。子级可能会暴露一个被调事件，例如， `onNameChanged`。然后，父级将通过传递回调处理程序来订阅该事件。

```jsx
<MyChild name={this.state.childsName} onNameChanged={this.handleName} />
```

The child would pass its requested new name as an argument to the event callback by calling, e.g., `this.props.onNameChanged('New name')`, and the parent would use the name in the event handler to update its state.

子级将通过调用以下命令将其请求的新名称作为参数传递给事件回调：例如，`this.props.onNameChanged(New name)`, 并且父级将使用事件处理程序中的名称来更新其状态。

```jsx
handleName: function(newName) {
   this.setState({ childsName: newName });
}
```

示例1：

```jsx
import React, { Component } from 'react';

class MyParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childsName: 'John Doe'
    };
    this.handleName = this.handleName.bind(this);
  }

  handleName(newName) {
    this.setState({ childsName: newName });
  }

  render() {
    return (
      <MyChild 
        name={this.state.childsName}                                            // this.state.childsName 是 MyParent 组件的状态属性 childsName，其初始值是 'John Doe'。
        onNameChanged={this.handleName}                                         // this.handleName 是 MyParent 组件的一个方法，用于处理名字的变化。
      />
    );
  }
}

export default MyParent;

```

示例2：

```jsx
import React from 'react';

// 在 MyChild 中，props.name 是从 MyParent 传递过来的 childsName，而 props.onNameChanged 是从 MyParent 传递过来的 handleName 方法。
function MyChild(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <button onClick={() => props.onNameChanged('Jane Doe')}>Change Name</button>
    </div>
  );
}

export default MyChild;

```


`this` 指的是 MyParent 组件的实例。
`this.state.childsName` 是 MyParent 组件的状态值。
`this.handleName` 是 MyParent 组件的方法。