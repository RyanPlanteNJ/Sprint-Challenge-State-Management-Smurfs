1. What problem does the context API help solve?

    Context solves the problem of ‘prop drilling.’ It lets you share data between components without having to pass props through every level of the component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in 
Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are objects that describe which state to change. Action creators are functions that return action objects. Action creators are called by the dispatching functions when we want to update a specific part of the state.

    A Reducer is a function that takes current state and an action object as arguments and returns a new, updated state.

    The store is an object contains the state for the application. Inside the store object, this state is immutable. The only way you are able to update the the state is to copy the current state, make changes to that copy through the reducer, and then replace the original state with the new, updated copy.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that needs to be shared and sent to many different components inside of our app which is maintained in the store that is called in the App component. Component state is state that is only has to be used and managed in one specific component and does not need to be passed to any other components inside of our app. You should use component state when it will only be used in inside the component, and application state if it will be used by more than one component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is middleware that allows us to make asynchronous API calls from action creators. When an action creator is called, Redux Thunk intercepts it and acts on the returned data. If an action object is returned, Redux Thunk forwards it to the reducer. If a function is returned (referred to as a ‘thunk’), it invokes the function and passes the dispatch function as an argument.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

        My favorite is Context API. You only have to so many lines of code and thats it. You're then able to pass it to multiple different components without needing to call connect or useReducer or any of the extra that can bog down and clutter up the code