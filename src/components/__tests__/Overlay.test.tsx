import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Overlay from '../Overlay';

describe('Overlay', () => {
  it('Is displayed if open', () => {
    render(<Overlay isOpen data-testid="overlay" />);
    expect(screen.getByTestId('overlay')).toBeVisible();
  });
  it('Is not displayed if not open', () => {
    render(<Overlay isOpen={false} data-testid="overlay" />);
    expect(screen.getByTestId('overlay')).not.toBeVisible();
  });
});
