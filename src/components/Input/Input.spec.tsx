import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (value: string, name: string, placeholder: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <Input value={value} name={name} placeholder={placeholder} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('Input test', () => {
  it('should changes the value when exec Onchange function', () => {
    const value = 'email@initial.com';

    const { renderComp } = createSut(value, 'email', 'E-mail:');

    renderComp();

    const Input = screen.getByPlaceholderText('E-mail:');

    fireEvent.change(Input, {
      target: { value: 'email@change.com' },
    });

    expect(Input.getAttribute('value')).toBe('email@change.com');
  });
});
