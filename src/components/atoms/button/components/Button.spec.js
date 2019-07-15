import React from 'react';
import { render } from 'react-testing-library';

import { Button } from './Button';

describe('Button', () => {
  it('renders', () => {
    const { queryByTestId } = render(<Button />);
    expect(queryByTestId('button-atom')).toBeTruthy();
  });

  it('renders with text', () => {
    const { queryByText } = render(<Button text="click me" />);
    expect(queryByText('click me')).toBeTruthy();
  });

  it('renders children', () => {
    const ChildComponent = () => <div data-testid="child-component" />;
    const { queryByTestId } = render(
      <Button>
        <ChildComponent />
      </Button>
    );
    expect(queryByTestId('child-component')).toBeTruthy();
  });

  it('renders the Hero component with custom props', () => {
    const { container } = render(
      <Button data-some-custom-value="some-custom-value" />
    );
    expect(
      container.querySelector('[data-some-custom-value="some-custom-value"]')
    ).toBeTruthy();
  });

  describe('element type', () => {
    it('renders a button if an onclick is present', () => {
      const { container } = render(<Button onClick={() => {}} />);
      expect(container.querySelector('button')).toBeTruthy();
      expect(container.querySelector('a')).toBeFalsy();
      expect(container.querySelector('div')).toBeFalsy();
    });

    it('renders an anchor tag if an href is present', () => {
      const { container } = render(<Button href="/some-href" />);
      expect(container.querySelector('a')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('div')).toBeFalsy();
    });

    it('renders an anchor tag if an href and an onClick is present', () => {
      const { container } = render(
        <Button href="/some-href" onClick={() => {}} />
      );
      expect(container.querySelector('a')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('div')).toBeFalsy();
    });

    it('renders a div if neither an href nor an onClick are present', () => {
      const { container } = render(<Button />);
      expect(container.querySelector('div')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('a')).toBeFalsy();
    });

    it('renders a div if the disabled prop is true', () => {
      const { container } = render(
        <Button disabled onClick={() => {}} href="/some-href" />
      );
      expect(container.querySelector('div')).toBeTruthy();
      expect(container.querySelector('button')).toBeFalsy();
      expect(container.querySelector('a')).toBeFalsy();
    });
  });
});
