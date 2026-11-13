// Carte de score officielle (distances en mètres), reprise du site du club.
export const reperes = [
  { id: 'blanc', nom: 'Blancs', couleur: '#ffffff' },
  { id: 'jaune', nom: 'Jaunes', couleur: '#f0c93d' },
  { id: 'bleu', nom: 'Bleus', couleur: '#8dbcec' },
  { id: 'rouge', nom: 'Rouges', couleur: '#ec7a72' },
] as const;

export type RepereId = (typeof reperes)[number]['id'];

export const trous = [
  { n: 1, par: 4, blanc: 380, jaune: 354, bleu: 354, rouge: 286 },
  { n: 2, par: 4, blanc: 349, jaune: 336, bleu: 320, rouge: 265 },
  { n: 3, par: 5, blanc: 491, jaune: 426, bleu: 418, rouge: 369 },
  { n: 4, par: 3, blanc: 164, jaune: 130, bleu: 120, rouge: 97 },
  { n: 5, par: 5, blanc: 513, jaune: 442, bleu: 437, rouge: 376 },
  { n: 6, par: 4, blanc: 311, jaune: 292, bleu: 280, rouge: 268 },
  { n: 7, par: 4, blanc: 304, jaune: 292, bleu: 283, rouge: 257 },
  { n: 8, par: 4, blanc: 369, jaune: 331, bleu: 315, rouge: 259 },
  { n: 9, par: 3, blanc: 169, jaune: 152, bleu: 131, rouge: 124 },
  { n: 10, par: 4, blanc: 315, jaune: 286, bleu: 263, rouge: 240 },
  { n: 11, par: 4, blanc: 338, jaune: 290, bleu: 290, rouge: 228 },
  { n: 12, par: 4, blanc: 371, jaune: 304, bleu: 304, rouge: 248 },
  { n: 13, par: 3, blanc: 174, jaune: 163, bleu: 129, rouge: 119 },
  { n: 14, par: 4, blanc: 369, jaune: 339, bleu: 301, rouge: 301 },
  { n: 15, par: 4, blanc: 394, jaune: 345, bleu: 312, rouge: 259 },
  { n: 16, par: 5, blanc: 442, jaune: 404, bleu: 397, rouge: 350 },
  { n: 17, par: 3, blanc: 166, jaune: 134, bleu: 124, rouge: 115 },
  { n: 18, par: 5, blanc: 526, jaune: 456, bleu: 447, rouge: 368 },
];

export const totaux = { par: 72, blanc: 6145, jaune: 5476, bleu: 5225, rouge: 4529 };

export const plusLong = Math.max(...trous.map((t) => t.blanc));

export const milliers = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, ' ');
