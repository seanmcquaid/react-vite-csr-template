# Testing Strategy

## Unit/Integration Testing

React Testing Library has become an industry standard for testing React Hooks/Components. In addition, we are pioneering a bit and using Vitest as our test runner. It is built on Vite, is incredibly fast and automatically handles paralleling tests on multiple threads to keep the entire test run speedy.

### Mocking HTTP Responses

RTK Query recommends using Mock Service Worker to handle mocking REST API requests. If you need to add a new service to mock, all you need to do is an additional handler to the mswServer in the testUtils directory. If you need to overwrite a previously added handler for your test, you can import the mswServer and add a handler manually. This will overwrite the previous handler.

### Mocking modules

There will be cases where you will want to mock an entire module/library. Here is a code snippet demonstrating a solid way to do this with TypeScript where you can easily control the behavior of the mocked module :

```ts
vi.mock('launchdarkly-react-client-sdk');
const mockUseFlags = useFlags as MockedFunction<typeof useFlags>;

mockUseFlags.mockImplementation(() => ({
  isEnabled: true,
}));
```

### Handling asynchronous code in Component Tests

More often than not when testing components with state in them, there will be some sort of asynchronous behavior to test. The following are some options :

#### waitFor

If you need to wait for a particular assertion to be true, this is a great option! For example, if we want to assert that a component is no longer in the DOM.

```ts
it('Waits for elements to be in the DOM', async () => {
  await waitFor(() =>
    expect(screen.queryByTestId('element')).toBeInTheDocument(),
  );
});
```

#### await screen.findBy

If you purely need to wait for an element to be in the DOM to assert against it, using findBy is a great option as well.

```ts
it('Also waits for elements to be in the DOM', async () => {
  expect(await screen.findByTestId('element')).toBeInTheDocument();
});
```


#### await userEvent.*

User Event is a separate library recommended by the maintainers of RTL that allows you to truly simulate user behavior without getting too into the implementation details like with fireEvent.

```ts
it('Navigates the user to post details page if they click the post', async () => {
  await userEvent.click(screen.getByTestId('button'));
  await userEvent.type(screen.getByTestId('input'), 'example')
});
```

### Best practices for querying for specific elements

#### Queries Accessible to Everyone

Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.

1. ByRole: This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name. This should be your top preference for just about everything. There's not much you can't get with this (if you can't, it's possible your UI is inaccessible). Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i}). Check the list of roles.
2. ByLabelText: This method is perfect for form fields. When navigating through a website form, users find elements using label text. This method emulates that behavior, so it should be your top preference.
3. ByPlaceholderText: A placeholder is not a substitute for a label. But if that's all you have, then it's better than alternatives.
4. ByText: Outside of forms, text content is the main way users find elements. This method can be used to find non-interactive elements (like divs, spans, and paragraphs).
5. ByDisplayValue: The current value of a form element can be useful when navigating a page with filled-in values.

#### Semantic Queries HTML5 and ARIA compliant selectors.

Note that the user experience of interacting with these attributes varies greatly across browsers and assistive technology.

1. ByAltText: If your element is one which supports alt text (img, area, input, and any custom element), then you can use this to find that element.
2. ByTitle: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users

#### Test IDs
1. ByTestId: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).

## E2E Testing

It is recommended to use Cypress as an E2E Testing Tool. Given how React Testing Library focuses on testing user behavior, there might be some redundancy in our tests. However, it is still important to have these in place as we gain confidence that our code is working as expected from a requirements' perspective. You should use `cy.intercept` to mock REST API Requests so your tests are in place to catch regressions in expected behavior and are as stable as possible.
