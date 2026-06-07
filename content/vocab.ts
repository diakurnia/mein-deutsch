// content/vocab.ts
import type { VocabTopic } from '@/content/vocab-types';
import { familie } from '@/content/vocab/familie';
import { essenTrinken } from '@/content/vocab/essen-trinken';
import { wohnen } from '@/content/vocab/wohnen';
import { berufArbeit } from '@/content/vocab/beruf-arbeit';
import { freizeitHobbys } from '@/content/vocab/freizeit-hobbys';
import { koerperGesundheit } from '@/content/vocab/koerper-gesundheit';
import { kleidung } from '@/content/vocab/kleidung';
import { stadtVerkehr } from '@/content/vocab/stadt-verkehr';
import { einkaufen } from '@/content/vocab/einkaufen';
import { schuleLernen } from '@/content/vocab/schule-lernen';

const VOCAB: VocabTopic[] = [
  familie,
  essenTrinken,
  wohnen,
  berufArbeit,
  freizeitHobbys,
  koerperGesundheit,
  kleidung,
  stadtVerkehr,
  einkaufen,
  schuleLernen,
];

/** Semua tema terurut — termasuk yang terkunci (untuk sidebar). */
export function getAllVocab(): VocabTopic[] {
  return [...VOCAB].sort((a, b) => a.order - b.order);
}

/** Hanya tema yang tersedia. */
export function getAvailableVocab(): VocabTopic[] {
  return getAllVocab().filter((t) => t.available);
}

/** Ambil satu tema berdasarkan id. Kembalikan undefined jika tidak ada atau terkunci. */
export function getVocab(id: string): VocabTopic | undefined {
  return VOCAB.find((t) => t.id === id && t.available);
}
