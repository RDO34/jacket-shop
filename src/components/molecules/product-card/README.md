# ProductCard

The `ProductCard` component takes a product and displays it's information on a card.

## Import

To import into a `.jsx` template file use:

```js
import { ProductCard } from '../../../molecules';
```

## Props

This component supports the following custom props:

- product: `Object`
  - **required**
  - has the following properties:
    - displayName (`String`): product name displayed on the card.
    - staticId (`String`): unique product identifier.
    - currentPrice (`Number`): current product price.
    - imgSrc (`String`): source for the product image.
    - inStock (`Boolean`): is the product in stock.
- onClick: `Function`
  - **optional**
  - the function to be called when the card button is clicked.
  - can only be used if an href is not included
- href: `String`
  - **optional**
  - the pathname of the page to navigate to.
  - takes priority over the onClick

## Usage

To use in a `.jsx` file:

```jsx
<ProductCard
  product={{
    staticId: 'SOME_ID',
    displayName: 'display name',
    currentPrice: 5,
    imgSrc: 'https://some-src.png',
    inStock: true
  }}
  onClick={() => console.log('hello there')}
  data-testid="product-card"
/>
```
