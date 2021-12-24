import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../index';

describe("Header", () => {

  // with getByText
  it('should render same text passed into title prop with getByText', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByText(/RESTy/i);
    expect(h1Element).toBeInTheDocument();
  });

  // with getByRole
  it('should render same text passed into title prop with getByRole no args', () => {
    render(<Header />);
    const h1Element = screen.getByRole('heading');
    expect(h1Element).toBeInTheDocument();
  });

  // with getByRole
  xit('should render same text passed into title prop with getByRole and args', () => {
    render(<Header />);
    const h1Element = screen.getByRole('heading', { name: /RESTy/i });
    expect(h1Element).toBeInTheDocument();
  });

  // with getByTitle
  it('should render same text passed into title prop', () => {
    render(<Header />);
    const h1Element = screen.getByTitle('Header')
    expect(h1Element).toBeInTheDocument();
  });

  // with getByTestId
  it('should render same text passed into title prop', () => {
    render(<Header />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).toBeInTheDocument();
  });

  // with getByText
});