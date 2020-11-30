# Exit Ticket: Day 13 (React)

You should be able to:
- Write a class or functional component in React
- Pass, receive, and render props in a React component
- Define and update state in a component
- Handle state changes in response to user events
- Render lists of data in JSX

## In your own words, what is the purpose of React?

React is a library for building user interfaces (specifically for SPAs).

Some of the highlights of why you'd choose React to build your UI are:
- It allows us to create **reusable UI components** (stay DRY!)
- It's performant (uses the **virtual DOM** behind the scenes to update the real DOM in an efficient way!)
- It cuts down on developer time, reduces bugs (modular/reusable code is less buggy, and since it's reusable, less code needs to be written!)
- It's cool 😎

## Which of the following are appropriate ways to access props in a component? Select all that apply.

- ✅ **In a stateless functional component, get the props object from the first argument to the function**
- In a stateless functional component, get the props object from the `this` context (i.e. `this.props`)
- ✅ **In a class component, get the props object from the `this` context (i.e. `this.props`)**
- In a class component, get the props object from the first argument to the render method

## How do you update the state on a class component?

Call `this.setState()` and pass it the new state data

## Which of the following statements is true?

- Class components are easier to write than functional components
- ✅ **Class components manage state, functional components can only receive data through props**
- Class components are always preferred to functional components because they extend React's built-in component
- Class components hold data in their props, functional components have no data

## In your own words, what is state?

State is directly managed by the (class) component, and will likely change. Typically, state holds information about the component itself, and the component can update/use its own state as it sees fit.

## In your own words, what are props?

Props are passed in from a parent component, and will likely remain unchanged. In fact, best practice is to keep props _unchanged_, and if the data must change, it is better to store in state.

From Facebook's guide on React:
> ... props are a way of passing data from parent to child. ...state is reserved only for interactivity, that is, data that changes over time.

More on this topic (difference between state and props) can be found in [this article](https://medium.com/@itIsMadhavan/reactjs-props-vs-state-ff3a7680930d), or the official React guides! (which are very well written, by the way!)


## Additional questions

### Can you demo how to make a dropdown with options?

A simple dropdown has `<option>` tags contained inside a `<select>`:
```html
<select id='my-dropdown'>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
```

Each option has a `value` attribute, which can be used later in JS code to access the selected option the user has chosen. Making a selection in the dropdown triggers the `onChange` event for the `<select>`.
```js
let dropdown = document.getElementById('my-dropdown');

dropdown.addEventListener('change', () => {
  let selectedValue = dropdown.value; // this will correspond to one of the <option> values that was selected by the user.
})
```

### Can we go over the extra credit in the Props and State Lab (Color Picker)

The extra credit involves setting multiple classes on a component. To set a class on a component, we use `className` instead of `class`:
```jsx
<div className='red'>Hello!</div>
```

To assign multiple classes, we use the same approach, and separate all classes by a space:
```jsx
// the following will add 4 classes to the div
<div className='red selected small bold'>Hello!</div>
```

In JSX, we can add multiple classes by following the string pattern above. This can either be constructed inline, or in another section of code (depending on your use case):
```jsx
let selected = true;
let classString = props.color;

if(selected) classString += ' selected';
// alternatively, you could use a ternary instead of an if-statement:
// classString = classString + (selected ? ' selected' : '')

<div className={classString}></div>
```

### Difference between manipulating props and actual HTML attributes

Everything you pass to a _component_ will end up on props:

```jsx
// passing these props...
<MyComponent myProp='my prop' hello='world' numbers={[1,2,3]} id='unique' class='styles'/>

// ... will yield this props object:
props = {
  myProp: 'my prop',
  hello: 'world',
  numbers: [1,2,3],
  id: 'unique',
  class: 'styles'
}
```

Everything you pass to an HTML-element will be interpreted as an HTML attribute, _not as props_:

```jsx
// passing these attributes...
<div myProp='my prop' hello='world' numbers={[1,2,3]} id='unique' class='styles' />

// ... will ONLY apply these (the rest are invalid as HTML attributes):
// id = 'unique'
// class = 'styles'
```

React will interpret anything with a _capital letter_ as a _component_, and anything in _lowercase_ as an _HTML element_:

```jsx
// React will treat all of these as components (i.e. attempt to invoke it's render method, etc):
<MyComponent />
<Counter />
<Div /> // not a good name for a component since it's also the name of an HTML element
<Form /> // not a good name for a component since it's also the name of an HTML element

// React will treat all of these as HTML elements (i.e. add them to the DOM, do not call render):
<mycomponent /> // will throw an error because this is not a valid HTML element
<counter /> // will throw an error because this is not a valid HTML element
<div />
<form />

```

### When is/isn't it necessary to pass props as an argument to the constructor?

In a nutshell: you need `props` in your constructor _if you plan to use `props` inside your constructor_. However, this is considered an anti-pattern (ie: not best practice) and should be used rarely.

For more detail, see [this article](https://overreacted.io/why-do-we-write-super-props/) (thank you Abbie for the link!)
