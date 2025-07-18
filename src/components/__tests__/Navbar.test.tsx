import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Sobre')[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Expertise/i)[0]).toBeInTheDocument();
  });
});
