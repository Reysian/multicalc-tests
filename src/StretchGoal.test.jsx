import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Stretch goal test', () => {
  it('button is disabled', async () => {
    render(<App />)
    await userEvent.clear(screen.getByRole('spinbutton'));
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
