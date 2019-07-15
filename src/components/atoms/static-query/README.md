# StaticQuery

The `StaticQuery` component takes a static Graphql Query and passes the data response 
to any child components.

## Import

To import into a `.jsx` template file use:

```js
import { StaticQuery } from '../../../atoms';
```

## Props

This component supports the following custom props:

- query: `Graphql Query`
  - **required**
  - the static graphql query.

## Usage

To use in a `.jsx` file:

```jsx
<StaticQuery
  query={graphql`
    query ExampleQuery {
      text
    }
  `}
>
  {data => <div>{data?.text}</div>}
</StaticQuery>
```
