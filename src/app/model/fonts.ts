const fontPalette = [
  { id: 0, name: 'Sofia, serif' },
  { id: 1, name: 'Zen Dots, cursive' },
  { id: 2, name: 'La Belle Aurore , cursive' },
  {
    id: 3,
    name: 'Roboto Mono, monospace',
  },
  {
    id: 4,
    name: 'Nunito, sans-serif',
  },
];

export class Font {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Fonts {
  private fonts: Font[] = [];
  private static fts = new Fonts();
  public static fontCount: number = fontPalette.length;

  private constructor() {
    this.fonts = fontPalette.map((ft) => {
      return new Font(ft.id, ft.name);
    });
  }

  public static getRandomFont = () => {
    return Fonts.fts.fonts[Math.floor(Math.random() * Fonts.fts.fonts.length)];
  };

  public static getFonts = () => {
    return Fonts.fts.fonts;
  };

  public static getFont = (id: Number) => {
    return <Font>Fonts.fts.fonts.find((ft) => ft.id === id);
  };
}
