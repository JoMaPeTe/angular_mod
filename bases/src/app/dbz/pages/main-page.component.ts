import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];
  onNewCharacter(character: Character): void {
    console.log("Main Page");
    console.log(character);
    this.characters.push(character);
  }
  deleteCharacterById(id: number): void {
    this.characters = this.characters.filter((character, index) => index !== id);
  }
}
