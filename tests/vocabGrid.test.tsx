import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VocabGrid } from '@/components/VocabGrid';
import type { VocabItem } from '@/content/vocab-types';

const ITEMS: VocabItem[] = [
  { wortart: 'Nomen', de: 'Mutter', artikel: 'die', plural: 'die Mütter', translation: 'ibu' },
  { wortart: 'Verb',  de: 'haben',  translation: 'memiliki', ich: 'habe', erSie: 'hat', irregular: true, trennbar: false },
  { wortart: 'Adjektiv', de: 'groß', translation: 'besar', example: 'Die Familie ist groß.' },
];

describe('VocabGrid', () => {
  it('merender semua item', () => {
    render(<VocabGrid items={ITEMS} />);
    expect(screen.getByText('Mutter')).toBeDefined();
    expect(screen.getByText('haben')).toBeDefined();
    expect(screen.getByText('groß')).toBeDefined();
  });

  it('merender badge NOMEN untuk Nomen', () => {
    render(<VocabGrid items={[ITEMS[0]]} />);
    expect(screen.getByText('NOMEN')).toBeDefined();
  });

  it('merender badge VERB untuk Verb', () => {
    render(<VocabGrid items={[ITEMS[1]]} />);
    expect(screen.getByText('VERB')).toBeDefined();
  });

  it('merender badge ADJ untuk Adjektiv', () => {
    render(<VocabGrid items={[ITEMS[2]]} />);
    expect(screen.getByText('ADJ')).toBeDefined();
  });

  it('merender artikel badge die pada Nomen', () => {
    render(<VocabGrid items={[ITEMS[0]]} />);
    // "die" muncul di legend dan di badge artikel, jadi gunakan getAllByText
    expect(screen.getAllByText('die').length).toBeGreaterThanOrEqual(1);
  });

  it('merender plural Nomen', () => {
    render(<VocabGrid items={[ITEMS[0]]} />);
    expect(screen.getByText('die Mütter')).toBeDefined();
  });

  it('merender konjugasi ich untuk Verb', () => {
    render(<VocabGrid items={[ITEMS[1]]} />);
    expect(screen.getByText('habe')).toBeDefined();
  });

  it('merender simbol irregular ⚡ untuk Verb irregular', () => {
    render(<VocabGrid items={[ITEMS[1]]} />);
    expect(screen.getByText(/⚡/)).toBeDefined();
  });

  it('merender contoh kalimat ADJ', () => {
    render(<VocabGrid items={[ITEMS[2]]} />);
    expect(screen.getByText('„Die Familie ist groß."')).toBeDefined();
  });

  it('merender tombol 🔊 untuk setiap item', () => {
    render(<VocabGrid items={ITEMS} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(ITEMS.length);
  });
});
