import { Component } from '@angular/core';
import { AppservService } from './appserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';

  message: string="";
  constructor(private appServ: AppservService){}

  ngOnInit():void{
    this.message= this.appServ.getMsg();
  }
}
