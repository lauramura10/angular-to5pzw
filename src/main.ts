import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  template: `
  <button
    type="button" [disabled]="canClick" (click)="sayMessage()"> Alert message
  </button>
  <h1>{{message2}}</h1>
  <p
    [id]="sayHelloId" [style.color]="fontColor"> You can set my color in the component!
  </p>
 
  <p>My color is {{ fontColor }}</p>
  
  <h2>Hello World: ngIf!</h2>
 
  <button type="button" (click)="onEditClick()">Make text editable!</button>

  <div class="luce" *ngIf="lucisingole.stato == 'ON'; else luceoff">
    <h5> ON </h5>
  </div>
  <ng-template #luceoff>
      <div class="luce">
      <h5> OFF </h5>
      </div>
  </ng-template>
  `,
})
export class HelloWorldBindingsComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  message3 = "I'm read only!";
  canEdit = true;

  sayMessage() {
    alert(this.message);
  }
  message2: string = 'Angular';

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message3 = 'You can edit me!';
    } else {
      this.message3 = "I'm read only!";
    }
  }
}
bootstrapApplication(HelloWorldBindingsComponent);
