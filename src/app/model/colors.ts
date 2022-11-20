const colorPalette = [
  { id: 0, bg: '#393E46', text: '#F2E7D5' },
  { id: 1, bg: '#CFF5E7', text: '#0D4C92' },
  { id: 2, bg: '#497174', text: '#EB6440' },
  { id: 3, bg: '#94B49F', text: '#76549A' },
];

export class Color {
  constructor(
    public id: Number,
    public backgroundColor: string,
    public textColor: string
  ) {}
}

export class Colors {
  private colors: Color[] = [];
  private static cols = new Colors();

  private constructor() {
    this.colors = colorPalette.map((col) => {
      return new Color(col.id, col.bg, col.text);
    });
  }

  public static getRandomColor = () => {
    return Colors.cols.colors[
      Math.floor(Math.random() * Colors.cols.colors.length)
    ];
  };

  public static getColors = () => {
    return Colors.cols.colors;
  };

  public static getColor = (id: Number) => {
    return <Color>Colors.cols.colors.find((col) => col.id === id);
  };
}
