// tests/vocab.test.ts
import { describe, it, expect } from 'vitest';
import { getAllVocab, getAvailableVocab, getVocab } from '@/content/vocab';

describe('getAllVocab', () => {
  it('mengembalikan 10 tema terurut berdasarkan order', () => {
    const all = getAllVocab();
    expect(all).toHaveLength(10);
    for (let i = 0; i < all.length - 1; i++) {
      expect(all[i].order).toBeLessThan(all[i + 1].order);
    }
  });

  it('tema pertama adalah familie', () => {
    expect(getAllVocab()[0].id).toBe('familie');
  });
});

describe('getAvailableVocab', () => {
  it('hanya mengembalikan tema yang available', () => {
    const available = getAvailableVocab();
    expect(available.length).toBeGreaterThan(0);
    available.forEach((t) => expect(t.available).toBe(true));
  });

  it('famille dan essen-trinken tersedia', () => {
    const ids = getAvailableVocab().map((t) => t.id);
    expect(ids).toContain('familie');
    expect(ids).toContain('essen-trinken');
  });
});

describe('getVocab', () => {
  it('mengembalikan topic yang tersedia', () => {
    const t = getVocab('familie');
    expect(t).toBeDefined();
    expect(t!.id).toBe('familie');
  });

  it('mengembalikan tema essen-trinken yang sudah aktif', () => {
    const t = getVocab('essen-trinken');
    expect(t).toBeDefined();
    expect(t!.id).toBe('essen-trinken');
  });

  it('mengembalikan undefined untuk id tidak ada', () => {
    expect(getVocab('tidak-ada')).toBeUndefined();
  });

  it('setiap jawaban latihan ada di pilihan', () => {
    const topic = getVocab('familie')!;
    topic.exercises.forEach((ex) => {
      expect(ex.options).toContain(ex.answer);
    });
  });

  it('semua tema: jawaban latihan selalu ada di pilihan', () => {
    getAllVocab().forEach((topic) => {
      topic.exercises.forEach((ex) => {
        expect(ex.options).toContain(ex.answer);
      });
    });
  });

  it('semua tema aktif punya minimal 5 soal latihan', () => {
    getAvailableVocab().forEach((topic) => {
      expect(topic.exercises.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('tema familie memiliki 18 item', () => {
    const topic = getVocab('familie')!;
    expect(topic.items).toHaveLength(18);
  });

  it('tema familie memiliki item Nomen, Verb, dan Adjektiv', () => {
    const topic = getVocab('familie')!;
    const wortarten = topic.items.map((i) => i.wortart);
    expect(wortarten).toContain('Nomen');
    expect(wortarten).toContain('Verb');
    expect(wortarten).toContain('Adjektiv');
  });
});
