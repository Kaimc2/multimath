import { Person } from "./person";

export class Player implements Person {
  name: string = "MultiMath Player";
  age: number;
  highScore: number;

  formatName() {
    return this.name.toUpperCase();
  }
}
