import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TestApp } from './App';

describe('test', () => {
  it('test 1', () => {
    const rendered = render(<TestApp />);

    const myDiv = rendered.getByTestId('myDiv');
    const myButton = rendered.getByTestId('myButton');

    expect(myDiv).toHaveTextContent('initial value');

    fireEvent.click(myButton);

    expect(myDiv).toHaveTextContent('final value');

    expect(rendered.container).toMatchSnapshot('final state')
  });
});
