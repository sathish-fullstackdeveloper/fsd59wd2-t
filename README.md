Rendering: inserting the HTML code into the DOM

## Doubts:

- [x] Usage of map function in react

- [x] destructuring in react

destructuring is a way to extract multiple values from an object or array. To assign multiple values from an object or array to multiple variables.

- [x] hooks in react: useState, useEffect

- class components: stateful components
- functional components: stateless components

state: data that changes over time / a component's memory

- hooks were introduced in react 16.8 to allow functional components to have state

- So, now we can use state in functional components using hooks. Also, functional components are efficient than class components.

- hooks are not available in class components
- hooks are special functions that allow you to "hook into" react state and lifecycle features from function components

- useState: a hook that allows you to have state variables in functional components

- useEffect: a hook that allows you to perform side effects in your functional components

Class Component Lifecycle Methods:

1. componentWillMount
2. componentWillUpdate
3. componentWillUnMount

- hooks starts with `use`

React uses VirtualDOM:

- React creates a virtual DOM. When state changes in a component it firstly updates the virtual DOM. Then it compares the virtual DOM with a snapshot of the virtual DOM taken right before the update. Then it updates the real DOM with only the things that have actually changed. So, it updates only the things that have changed rather than updating the whole DOM / entire page.

- [x] cloning repo from github to local
- [ ] react router dom
