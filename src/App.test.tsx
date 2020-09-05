import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { TestApp } from './App';

describe('test', () => {
  it('test 1', async () => {
    render(<TestApp />);

    const myDiv = await screen.findByTestId('myDiv');
    const myButton = await screen.findByTestId('myButton');

    expect(myDiv).toHaveTextContent('initial value');

    fireEvent.click(myButton);

    expect(myDiv).toHaveTextContent('final value');
  });
});
