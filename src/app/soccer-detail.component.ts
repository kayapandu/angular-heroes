import { Component, Input } from '@angular/core';
import { Soccer } from './soccer';


@Component({
  selector: 'soccer-detail',
  	template: `
    <div *ngIf="soccer">
      <h2>{{soccer.name}} details!</h2>
      <div><label>id: </label>{{soccer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="soccer.name" placeholder="name"/>
      </div>
        <div>
        <label>club: </label>
        <input [(ngModel)]="soccer.club" placeholder="club"/>
      </div>
    </div>
  `
})

export class SoccerDetailComponent {
	@Input() soccer: Soccer;
}