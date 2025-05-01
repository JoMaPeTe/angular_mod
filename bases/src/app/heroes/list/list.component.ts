import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'SheHulk','Thor', 'Captain America'];
  public deletedHero?: string;

  removeLastHero(): void {
    if (this.heroNames.length > 0) {
      this.deletedHero = this.heroNames.pop();
    } else {
      this.deletedHero = undefined;
    }
  }
}
