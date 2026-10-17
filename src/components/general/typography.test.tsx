import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Typography from '@/components/general/typography';

afterEach(cleanup);

describe('Typography', () => {
  it('renderiza variante h1 como h1', () => {
    render(<Typography variant="h1">Ricardo Camilo</Typography>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe('Ricardo Camilo');
  });

  it('renderiza variante body1 como parágrafo', () => {
    render(<Typography variant="body1">Programador Frontend</Typography>);
    expect(screen.getByText('Programador Frontend').tagName).toBe('P');
  });

  it('respeita o componente customizado', () => {
    render(<Typography variant="h2" component="h3">Projetos</Typography>);
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Projetos');
  });
});
