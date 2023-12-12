import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  user(){
    return [
      {name : "suhag", age: 23, email: "suhag@gmail.com"},
      {name : "aman", age: 25, email: "aman@gmail.com"},
      {name : "anshul", age: 24, email: "anshul@gmail.com"},
      {name : "akash", age: 26, email: "akash@gmail.com"},
    ]
  }
}
