export const site = {
  nom: 'La Grande Romanie',
  baseline: 'Golf de Châlons-en-Champagne',
  telephone: '03 26 66 65 97',
  telephoneLien: 'tel:+33326666597',
  adresse: ['Route départementale 994', '51460 Courtisols'],
  itineraire: 'https://www.openstreetmap.org/search?query=Golf%20de%20la%20Grande%20Romanie%20Courtisols',
  reservation: 'https://www.grip-resa.com/golf-de-chalons-en-champagne',
  reservationMembres: 'https://chalons.n.netgolf.fr/',
  horaires: ['Hiver : de 9 h 30 à 17 h', 'Été : de 9 h à 18 h'],
};

export const rubriques = [
  { titre: 'Parcours', href: '/parcours' },
  { titre: 'Bar · Restaurant', href: '/restaurant' },
  { titre: 'Compétitions', href: '/competitions' },
  { titre: 'Actualités', href: '/actualites' },
];

const jour = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', timeZone: 'UTC' });
const mois = new Intl.DateTimeFormat('fr-FR', { month: 'long', timeZone: 'UTC' });
const moisAnnee = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric', timeZone: 'UTC' });
const complet = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const semaine = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', timeZone: 'UTC' });

export const dates = {
  jour: (d: Date) => jour.format(d).replace(/^1$/, '1er'),
  mois: (d: Date) => mois.format(d),
  moisAnnee: (d: Date) => moisAnnee.format(d),
  complet: (d: Date) => complet.format(d).replace(/^1 /, '1er '),
  semaine: (d: Date) => semaine.format(d),
  iso: (d: Date) => d.toISOString().slice(0, 10),
};

export const sansDate = (id: string) => id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
