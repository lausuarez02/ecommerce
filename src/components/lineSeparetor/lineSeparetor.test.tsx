import React from 'react';
import { render, screen} from '@testing-library/react';
import LineSeparetor from './lineSeparetor';

test('LineSeparator Renders', () => {
    const {container} = render(<LineSeparetor/>);
    const divElement = container.querySelector('div');
    expect(divElement).toBeInTheDocument()
})