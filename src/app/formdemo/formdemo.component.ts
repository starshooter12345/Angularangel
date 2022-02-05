import { Component } from '@angular/core';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo2.component.html',
  styleUrls: ['./formdemo.component.css']
})

export class FormdemoComponent{
  submit(login: any){
    console.log("Form submitted", login)
  }
}
