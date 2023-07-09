import { render, screen } from '@testing-library/react';
import RouterBlog from './RouterBlog';

test('renders learn react link', () => {
  render(<RouterBlog />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
