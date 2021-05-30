import { render, screen } from '@testing-library/react';
import AppPage from './pages/appPage';

test('renders learn react link', () => {
  render(<AppPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
