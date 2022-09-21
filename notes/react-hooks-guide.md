# React Hooks Guide

With the introduction of React 18, we now have access to even more specialized hooks than before. This guide is meant to walk you through some potential use cases for each common hook in React.

## useState

Commonly used to manage a focused piece of state. For example :

1. User input
2. Whether something is displayed or not
3. Data from an API if not using RTK query or Redux

## useEffect

Commonly used to simulate a similar experience to the life cycle hooks ComponentDidMount, ComponentDidUpdate, and OnComponentUnmount. Some common uses include :

1. Dispatch an action or call an API on page load
2. Trigger an event if some specific state changes
3. Unsubscribe from an event when the component unmounts

## useContext

Introduced by the React team to give a different option for global state management besides Redux. If your app is not particularly large but you need global state management, this is a great way to achieve that! If you use this hook with useReducer, you can more or less set up something similar to Redux at a smaller scale.

## useReducer

Commonly used to manage state objects that contain multiple sub values that need to change at once. For example :

1. Managing an object that needs to keep track of multiple object values and needs to reference the previous state to update
2. Used with useContext to simulate a smaller version of Redux
3. Creating custom state management hooks that are complex

## useCallback

Helps with performance and limit the amount of renders of a component by having the wrapped function always return the same reference on component re-render.

## useMemo

Helps with performance and limit the amount of renders of a components by memoizing the wrapped return value. This is great for when you have an expensive function call with a return value you need that you don't want running on every re-render.

## useRef

Used to either help with referencing an element or assist with only running code when the component is fully mounted in a useEffect hook.

## useDeferredValue - new in React 18

This hook is commonly used to keep the interface responsive when you have something that you want to render immediately and something that needs to wait for a data fetch to complete. A good example of this is using a 3rd party library to make an API request, but you can't control when state will update exactly (like RTK).

## useTransition - new in React 18

This hook is great manually deferring less important state updates when batching multiple state updates together. For example, we have some user input we need to immediately display, but we have a state update we'd like to perform that isn't as urgent.
