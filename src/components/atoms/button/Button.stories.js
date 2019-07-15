import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { Button } from '.';
import readme from './README.md';

storiesOf('Atoms | Button', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <Button
        text={text('text', 'Click me')}
        disabled={boolean('disabled', false)}
        href={text('href', '/some-href')}
        onClick={select('onClick', [() => {}, null], null)}
        width={number('width', 50)}
      />
    ),
    {
      notes: { markdown: readme }
    }
  );
