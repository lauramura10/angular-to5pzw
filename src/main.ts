import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  template: `
  <h1>Test</h1>
 
  <p>My color is {{ fontColor }}</p>
  `,
})
export class HelloWorldBindingsComponent {
  fontColor = 'blue';
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  }
}
bootstrapApplication(HelloWorldBindingsComponent);
