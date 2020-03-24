# Redux: Forms Code-a-long

**Create The Form in React**

```js

// ./src/components/todos/CreateTodo.js

import React, { Component } from 'react'

class CreateTodo extends Component {
    render() {
        return(
        <div>
        <form>
            <p>
                <label>add todo</label>
                <input type="text" />
            </p>

        ]   <input type="submit" />
        </form>
        </div>
        );
    }
};

export default CreateTodo;

```

**Plan for Integrating into Redux**
Think about how you want to integrate this into Redux.

Essentially, upon submitting the form,
you would like to dispatch the following action to the store:

```js
{
  type: 'ADD_TODO',
  todo: todo
}

// So if the user has typed in buy groceries,
// your action would look like:
{
    type: 'ADD_TODO',
    todo: 'buy groceries'
}
```

How do you get that text from the form's input?

You can use your normal React trick of updating the createTodo component's state
whenever someone types something into the form.

Then, when the user clicks on the submit button, you can grab that state,
and call `store.dispatch({ type: 'ADD_TODO', todo: this.state })`.

*Implementation*

Step one will be updating the component state whenever someone types in the form.

1. Create a Controlled Form Using @State and an @onChange Event Handler

Every time the input is changed, you want to change the state.

To do this, first add an event handler for every input that changes.

So inside the createTodo component, you change our render function to the following.

```js

// ./src/components/todos/createTodo

...
    render(){
        return(
        <div>
        <form>
            <p>
                <label>add todo</label>
                <input type="text" onChange={(event) => this.handleChange(event)}/>
            </p>

            <input type="submit" />
        </form>
        </div>
        );
    }
...
    /**
    * All this code does is say that every time the user changes the input field
    * (that is, whenever the user types something in) you should call handleChange()
    * (which you haven't written yet).
    **/

```

Your code calls the handleChange() function each time the user types in the input,
but you still need to write that handleChange function.

Start the old way, setting a state value:

```js

// ./src/components/todos/createTodo

...
    constructor() {
        super();

        this.state = {
            text: '',
        };
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    };

    render(){
        return(
        <div>
        <form>
            <p>
                <label>add todo</label>
                <input type="text" onChange={(event) => this.handleChange(event)}/>
            </p>

            <input type="submit" />
        </form>
        </div>
        );
    }
...
    /**
    * NOTE: you pass through the event, which comes from the onChange event handler.
    * The event's target is the input that was listening for the event (the text field),
    * and the value is the current value of that text field.
    **/

```

Currently, you're using class method syntax to define handleChange() on your component.

The JSX code within your render() method is particular to a specific instance of the component,
but, by default, class methods are called "the context of the prototype chain", not an instance.

In order for this to correctly reference this specific instance of your component,
you need to either @bind it (often done in the constructor()),
or use an @arrow function in your @onChange event handler.

Because arrow functions don't define their own version of @this,
they'll default to the context they are in.

We never intend for `handleChange()` to be used any other way.

In modern JavaScript, you are able to directly class assign properties
instead of assigning them inside a constructor().

Meaning: instead of writing handleChange() as a class method,
you could declare it as a class property and assign an arrow function to it:


```js

// ./src/components/todos/createTodo

...

    // The result is that handleChange() will always be bound
    // to the particular instance of the component it is defined in.

    constructor() {
        super();

        this.state = {
            text: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render(){
        return(
        <div>
        <form>
            <p>
                <label>add todo</label>
                <input type="text" onChange={(event) => this.handleChange(event)}/>
            </p>

            <input type="submit" />
        </form>
        </div>
    );
}

```

Now that handleChange() is defined using an arrow function,
You can actually write an even shorter onChange callback: onChange={this.handleChange}.

In this case, `this.handleChange` refers to the definition of a function
that takes in the event as an argument.

No need for the @onChange arrow function callback anymore!

To make a completely controlled form,
you will also need to set the @value attribute of your input element to `this.state.text`.

This way, every key stroke within input will call a @setState from within @handleChange,
the component will re-render and display the new value `for this.state.text`.

The @CreateTodo component should look like the following now:

```js

// ./src/components/todos/CreateTodo.js

import React, { Component } from 'react';

class CreateTodo extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
        };
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return(
        <div>
        <form>
            <p>
            <label>add todo</label>
            <input
                type="text"
                onChange={this.handleChange} value={this.state.text}
            />
            </p>

            <input type="submit" />
        </form>

        {this.state.text}

        </div>
        );
    }
};

export default CreateTodo;

/** NOTE:
Inside the render function,
you wrapped your form in a div,
and then at the bottom of that div you've added the line {this.state.text}.

This isn't necessary for functionality,
but you do this to visually confirm that you are properly changing the state.

If you see your DOM change with every character you type in,
you're in good shape.
**/

```

It's on to step 2.

2. On Submission of Form, Dispatch an Action to the Store

Now you need to make changes to your form
so that when the user clicks submit, you dispatch an action to the store.

```js

// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageTodo);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

```

Just below the import statements, you can see that we create the store using createStore, provided by redux. Then, further down, we pass the store into the Provider. This will allow us access when we connect our components.

Ok, let's connect the CreateTodo. First, we want to import connect from react-redux and modify our export statement:

// ./src/components/todos/CreateTodo.js
import { connect } from 'react-redux';

...

export default connect(null, mapDispatchToProps)(CreateTodo);

In this component, we are not currently concerned with writing a mapStateToProps() function (the first argument passed to connect) as this component doesn't need any state. Since we only need to dispatch an action here and we are not getting information from our store, we can use null instead of mapStateToProps as the first argument.

Next, as we write out our mapDispatchToProps() function, we'll need to decide on how to structure our data and the related action. The basic frame of the function will look like the following:

// ./src/components/todos/CreateTodo.js

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(<some action>)
  }
}

On submission of the form in our component, we want to send the value we've captured in the local state to be added to our Redux store. With the above set up, addTodo becomes a function in props that is able take arguments.

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch(<some action>)
  }
}
From the Redux docs, we know that needs to be a plain javascript object with a type key describing the type of action. We also need to include the data from the form - in this case, we'll call that key 'payload'.

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
In our component, we could call something like this.props.addTodo(this.state). Since this.state is an object with only one property, text.

Now we need to update the render() function of the CreateTodo component to call a callback on the submission of a form:

// ./src/components/todos/CreateTodo.js

...

<form onSubmit={ event => this.handleSubmit(event) }>

...
The handleSubmit() function:

// ./src/components/todos/CreateTodo.js

...

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}

...
When handleSubmit() is called, whatever is currently stored in this.state will be sent off to our reducer via our dispatched action. The fully redux'd component ends up looking the like the following:

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.text}
              />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
Now, when the form is submitted, whatever the this.state is will be dispatched to the reducer with the action.

3. Update state

```js

// ./src/reducers/manageTodo.js

export default function manageTodo(state = {todos: [],}, action) {
    switch (action.type) {

    case 'ADD_TODO':
        console.log({ todos: state.todos.concat(action.payload.text) });
        return { todos: state.todos.concat(action.payload.text) };

    default:
        return state;
    }
}

```


**Summary**
First, we made sure the React component of our application was working. We did this by building a form, and then making sure that whenever the user typed in the form's input, the state was updated.

Second, We connected the component to Redux and designed our mapDispatchToProps

Third, we built our reducer such that it responded to the appropriate event and concatenated the payload into our array of todos.
