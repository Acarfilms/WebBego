const themeOrder: { [key: string]: number } = {
  'Tema 1': 1,
  'Tema 1 Bloque II': 2,
  'Tema 2': 3,
  'Tema 2 Bloque II': 4,
  'Tema 3': 5,
  'Tema 3 Bloque II': 6,
  'Tema 4': 7,
  'Tema 4 Bloque II': 8,
  'Tema 5': 9,
  'Tema 5 Bloque II': 10,
  'Tema 6': 11,
  'Tema 6 Bloque II': 12,
  'Tema 7': 13,
  'Tema 7 Bloque II': 14,
  'Tema 8': 15,
  'Tema 8 Bloque II': 16,
  'Tema 9': 17,
  'Tema 9 Bloque II': 18,
  'Tema 10': 19,
  'Tema 10 Bloque II': 20,
  'Tema 11': 21,
  'Tema 11 Bloque II': 22,
  'Tema 12': 23,
  'Tema 12 Bloque II':24,
  'Tema 13': 25,
  'Tema 14': 26,
  'Tema 15': 27,
  'Tema 16': 28,
  'Evaluación Tema 1-9': 29,
  'Evaluación Tema 1-16': 30,
  'Simulacro de Examen ADAM': 31,
  'Simulacro de Examen MAD': 32,
  'Examen oficial convocatoria 2023': 33,
  'Psicotecnicos 1': 34,
  'Psicotecnicos 2': 35,
  'Psicotecnicos 3': 36,
  'Psicotecnicos 4': 37,
  'Psicotecnicos 5': 38
};

export const sortThemes = <T extends { name: string }>(themes: T[]): T[] => {
  return [...themes].sort((a, b) => {
    const orderA = themeOrder[a.name] || Number.MAX_SAFE_INTEGER;
    const orderB = themeOrder[b.name] || Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });
};