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
  public talents: Talent[];
  public icon: Icon;

  constructor(name: string, level: number, backgroundColor: string, particleColor: string, voice: string, birthDate: string, vision: string,group: string, constellation: string, description: string, talents: Talent[], icon: Icon) {
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
    this.talents = talents;
    this.icon = icon;
  }
}

export class Talent {
  public name: string;
  public level: number;
  public image: string;

  constructor(name: string, level: number, image: string) {
    this.image = image;
    this.level = level;
    this.name = name;
  }
}

export class Icon {
  public image: string;

  constructor(image: string) {
    this.image = image;
  }
}
