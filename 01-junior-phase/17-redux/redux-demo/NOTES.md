# Redux!

A state management library:
- Can be used anywhere you can write JS
  - We will use on the client-side
- Most "state" will no longer be stored in individual React components
- Instead, Redux will keep track of 1 single "state", that all parts of your app will share
  - That means fewer props to pass around!
  - Any component that needs something from "state" can get it from Redux themselves, they do not need to rely on getting that info passed to them (via props) from their parent

## Setup

To use Redux, here's the ingredients you need:

1. **store**

but to make a store, we need a

2. **reducer**

but to make a reducer function, we need _state_ and _action_, which means we should also set up an

3. **initial state**

and

4. **actions**

## Store functions

### `getState`

Params: none :)
Returns: the current state in the Redux store!

```js
console.log(store.getState());
```

### `dispatch`

Params: an action (which is an object)
Returns: nothing really... but it will trigger your Redux state to update!

Call this function to send an action over to the reducer. Your reducer will process the action and determine what the new state should be. Redux will then update the state appropriately.

```js
console.log('initial state:', store.getState()); // initial state: {songs: []}

let myAction = { type: 'ADD_SONG', newSong: 'Jingle Bells'}
store.dispatch(myAction);

console.log(store.getState()); // {songs: ['Jingle Bells']}
```

### `subscribe`

Params: a function that you want to execute each time the state updates
Returns: another function! when this returned function is called, it will end your subscription (unsubscribe).

```js
// set up the subscription AND save the function it returns so you can unsubscribe later
let unsubscribe = store.subscribe(() => console.log(store.getState()))

// ... later on in the code, when you're done with the subscription:
unsubscribe();
```
