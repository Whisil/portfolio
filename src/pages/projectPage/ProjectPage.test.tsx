import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectPage from './index';

const renderProject = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </MemoryRouter>,
  );

describe('ProjectPage', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('renders a project case study from the URL slug', () => {
    renderProject('/work/syrnyk');

    expect(screen.getByRole('heading', { name: 'Syrnyk' })).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText(/Product flow/)).toBeInTheDocument();
    expect(screen.getByText(/04 \/ Engineering/)).toBeInTheDocument();
  });

  it('renders the not-found state for an unknown slug', () => {
    renderProject('/work/unknown');

    expect(
      screen.getByText('This project does not exist.'),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to work/i })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
