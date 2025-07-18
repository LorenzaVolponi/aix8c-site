import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('displays company name', () => {
    render(<Footer />);
    expect(screen.getByText('AIX8C')).toBeInTheDocument();
  });
});
