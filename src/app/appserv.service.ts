import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppservService {

  constructor() { }

  getMsg(){
    return "EDUREKA!";
  }
}
