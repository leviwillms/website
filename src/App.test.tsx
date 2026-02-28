import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Career/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Interests/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
});
