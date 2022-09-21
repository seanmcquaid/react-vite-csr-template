# Tooling Decisions

While most projects at CFA have historically used Create React App to spin up new React projects, this set of tools is meant to serve as a replacement for CRA for new React Projects on CTS.

## Development

### Vite

A modern build tool for Front End Development created by Evan You, the creator of Vue.js. In the past couple of years, it has picked up a serious amount of traction due to its incredible speed and small bundle size output. It does not require a lot of additional plugins to make it feel like you are using react-scripts but provides a ton of great benefits in terms of performance. Because the build from Vite is using ESModules, the bundle size for an average production builld will run about 50% less than a build from react-scripts.

### React + TypeScript

Previously, React projects at CFA have used JavaScript as the programming language. However, we have had a fair amount of bugs occur in production due to broken API contracts that could have been prevented if we had type checking in place. TypeScript will greatly reduce unhandled errors in our applications and greatly improve the developer experience. Every major IDE supports TypeScript autocompletion and type checking which will eliminate bugs. In addition, we can override existing types for 3rd Party Libraries using native TypeScript features.

### Redux Toolkit + RTK Query

Recently, the maintainers of Redux deprecated `createStore`. In doing so, they officially added comments to the deprecation that using Redux Toolkit is now the preferred way to interact with Redux. The amount of boilerplate code that Redux Toolkit handles with `createSlice` is fantastic and will ultimately eliminate a lot of repetitive steps that are typically associated with creating new actions/reducers in Redux. In addition, we can now create async thunks for API requests where we want to persist the data throughout the whole api with `createAsyncThunk`. It automatically generates pending, fulfilled and rejected cases for our reducer, so we don't need to write additional action creators by hand.

In addition to the tools that are useful for working with Redux, Redux Toolkit comes with RTK Query, a library for handling API requests. RTK Query's `createApi` function auto generates React Hooks that can be used to handle all state associated with API requests. This tool ultimately eliminates a lot of the need for using Redux purely as an API cache and can help us greatly reduce the size of our Redux state.

### Launch Darkly React SDK

In the past, we have used the `launchdarkly-js-client-sdk` to handle setting up and interacting with Launch Darkly. Typically, we have created a reducer in  Redux to handle all of our feature flagging. However, the `launchdarkly-react-client-sdk` gives us everything we need to eliminate the need for this additional reducer in Redux. We can overwrite the returned flag types with TypeScript and thus use the `useFlag` hook within our application as long as we wrap the application with the appropriate Provider from Launch Darkly.

### Bugsnag

It is a standard for CFA React apps to utilize Bugsnag error reporting. This gives us the ability to have visibility into production issues and be able to quickly respond to issues in the field.

### i18n

As we look to expand internationally, we need to have tooling in place to support this. `i18next` and `react-i18next` give us the infrastructure needed to handle this appropriately.

### Styled Components

While there can be some performance benefits utilizing regular CSS or SCSS, Styled Components has a lot to offer in terms of dynamically responding to props and setting global themes. It is considered to be the standard way for us to handle styling in React on CTS.

## Testing

### Vitest

Historically, most React projects have come pre-packaged with Jest as a test runner. However, Jest has been losing favor with the community due to lack of releases to address open issues. Vitest is built upon Vite and has a lot of the same benefits in terms of speed. It draws on Jest for a lot of inspiration in terms of functionality but is consistently releasing new updates.

### React Testing Library

React Testing Library is the industry standard for React hooks and component testing. We have some utils in place for the project to eliminate the need to spin up all the needed setup for Redux + React Router Dom for your tests.

### Cypress

Cypress is preferred E2E testing tool of the industry currently. It is very intuitive and developer friendly, which will allow the developers on the team to easily create automated tests to verify expected behavior.
