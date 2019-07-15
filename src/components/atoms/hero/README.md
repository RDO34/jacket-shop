# Hero

The `Hero` component takes an image and displays it the full width of the screen.

## Import

To import into a `.jsx` template file use:

```js
import { Hero } from '../../../atoms';
```

## Props

This component supports the following custom props:

- src: `String`
  - **required**
  - the image source for the background.
  - must be a url.
- height: `String`
  - **optional**
  - sets the height of the hero image.
  - defaults to 512px.
  - must include a unit of measurement, e.g. `px`, `%`, `em`, etc.
  
## Usage

To use in a `.jsx` file:

```jsx
<Hero src="https://some-src.ca" />
```
With child components:
```jsx
<Hero
  src="https://some-src.ca"
  data-testid="example-testid"
  height="200px"
>
  <em>Some Text!</em>
</Hero>
```
