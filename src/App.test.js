import { render, screen } from '@testing-library/react';
import App from './App';

test('find header in page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather Forecast/i);
  expect(linkElement).toBeInTheDocument();
});

test('find button in page', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/button/i);
  expect(linkElement).toBeInTheDocument();
});

test('find img in page', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/img/i);
  expect(linkElement).toBeInTheDocument();
});