import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-demo-component]',
  template: `<h1>Sample message </h1>`,
  styles:[` h1{
    color : red;
  }`]
})
export class DemoComponentComponent {


  title="This is interpolation"
}
