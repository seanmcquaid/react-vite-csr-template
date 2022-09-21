# Redux Toolkit Guide

Redux toolkit gives us a great deal of benefits in terms of reducing boilerplate code that is pretty standard when working with Redux. In addition, Redux Toolkit also introduced their own  library for handling API requests that handles a lot of typical patterns for state management when working with APIs.

## When to use RTK Query
If you have data from an API that you only want to live on one page, you should use RTK query. You are able to subscribe multiple components to the same query on the page, so you don't have to get into deep prop drilling scenarios. The biggest benefit of using RTK query is that it will handle determining all the different possible states when calling the API and will automatically clear the cache after you've left the page.

## When to use createAsyncThunk
If you have some data from an API you want to use somewhere outside just that one page/component, use createAsyncThunk. It will automatically handle pending, fulfilled and error states for an API call. For example, let's say that we want to store some user data on app load that we will reference throughout the whole app (like a token). This would be a great use case for this!

## When to create your own action
If you have a fair amount of actions/actionCreators you'd like to call in succession, and you could see yourself using the same set of calls again, it makes sense to create a custom action. For example, if we want to only have the app marked as initialized after we have finished loading all of our needed data from i18n, Launch Darkly, Bugsnag, etc. 
