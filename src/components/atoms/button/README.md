# Button

The `Button` component takes an href or an onClick and renders a clickable element.

## Import

To import into a `.jsx` template file use:

```js
import { Button } from '../../../atoms';
```

## Props

This component supports the following custom props:

- text: `String`
  - **optional**
  - the text displayed on the rendered element.
  - is overwritten by child components if they are present.
- onClick: `Function`
  - **optional**
  - the function to be called when the button is clicked.
- href: `String`
  - **optional**
  - the pathname of the page to navigate to.
- width: `String` or `Number`
  - **optional**
  - determines the percentage width of the element.
  - defaults to 100.
- disabled: `Boolean`
  - **optional**
  - adds disabled styles and renders an un-clickable element.

## Usage

To use in a `.jsx` file:

```jsx
<Button
  text="Click me!"
  href="/checkout"
  onClick={() => console.log('hello there')}
  width={75}
  disabled
  data-testid="product-card"
/>
```

or with children:

```jsx
<Button href="/checkout"><img src="some-src"></Button>
```
