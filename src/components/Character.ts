export class Character {
  public name: string;
  public level: number;
  public type: string;
  public backgroundColor: string;
  public particleColor: string;

  constructor(name: string, level: number, type: string, backgroundColor: string, particleColor: string) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.backgroundColor = backgroundColor;
    this.particleColor = particleColor;
  }
}
