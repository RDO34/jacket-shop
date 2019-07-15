import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export const Button = ({
  disabled,
  onClick,
  href,
  text,
  children,
  width,
  ...props
}) => {
  const gradientColours = disabled ? '#aa4931, #d85e6a' : '#3b5f91, #51828c';
  const StyledButton = styled.button`
    align-items: center;
    background-image: linear-gradient(to right, ${gradientColours});
    border: none;
    box-shadow: 0 0 5px #2d2d2d;
    color: #ededed;
    display: flex;
    font: 400 1em arial;
    font-style: italic;
    height: 3em;
    justify-content: center;
    text-align: center;
    text-shadow: 2px 0 0 #2d2d2d;
    text-decoration: none;
    width: ${width || 100}%;
  `;
  const getElement = () => {
    if (disabled || (!href && !onClick)) return 'div';
    if (href) return Link;
    return 'button';
  };
  return (
    <StyledButton
      data-testid="button-atom"
      as={getElement()}
      href={href}
      onClick={onClick}
      {...props}
    >
      {children || text}
    </StyledButton>
  );
};
