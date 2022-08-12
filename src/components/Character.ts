export class Character {
  public name: string;
  public level: number;
  public backgroundColor: string;
  public particleColor: string;
  public voice: string;
  public birthDate: string;
  public vision: string;
  public group: string;
  public constellation: string;
  public description: string;

  constructor(name: string, level: number, backgroundColor: string, particleColor: string, voice: string, birthDate: string, vision: string,group: string, constellation: string, description: string) {
    this.name = name;
    this.level = level;
    this.backgroundColor = backgroundColor;
    this.particleColor = particleColor;
    this.voice = voice;
    this.birthDate = birthDate;
    this.vision = vision;
    this.group = group;
    this.constellation = constellation;
    this.description = description;
  }
}
