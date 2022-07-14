import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('render posts if request success', async () => {
    render(<Async />);

    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});

// https://www.w3.org/TR/html-aria/#docconformance
