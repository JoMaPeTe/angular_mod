import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];
  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };
    this.characters.push(newCharacter);
  }
  deleteCharacterById(id: string): void {
    // this.characters.splice(id,1);
    this.characters=this.characters.filter((character) => character.id !== id);
    console.log('Service');
    console.log(this.characters);
  }
}
