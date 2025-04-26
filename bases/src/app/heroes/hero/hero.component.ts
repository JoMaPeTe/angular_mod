import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 25;
  changeName(): void {
    this.name = 'ironman';
  }
  changeAge(): void {
    this.age = 45;
  }
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 25;
  }
}
