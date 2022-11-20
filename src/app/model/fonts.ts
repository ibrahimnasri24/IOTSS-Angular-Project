const fontPalette = [
    { id: 0,  name: "'Times New Roman', Times, serif"  },
    { id: 1,  name: "Arial, Helvetica, sans-serif"},
    { id: 2,  name: "'Courier New', Courier, monospace" },
    { id: 3 , name: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" },
    
  
  
  ];
  
  export class Font {
    constructor(
      public id: Number,
      public name: string,
     
    ) {}
  }
  
  export class Fonts {
    private fonts: Font[] = [];
    private static fts = new Fonts();
  
    private constructor() {
      this.fonts = fontPalette.map((ft) => {
        return new Font(ft.id,  ft.name);
      });
    }
  
    public static getRandomFont = () => {
      return Fonts.fts.fonts[
        Math.floor(Math.random() * Fonts.fts.fonts.length)
      ];
    };
  
    public static getFonts = () => {
      return Fonts.fts.fonts;
    };
  
    public static getFont = (id: Number) => {
      return <Font>Fonts.fts.fonts.find((ft) => ft.id === id);
    };
  }
  