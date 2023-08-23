import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Codder';

  getName(name){
    alert("Hi My Name is : "+name);
  }
// Events
  getData(data){
       console.warn(data)
  }
  getColor(data){
      console.warn(data);
  }

  // get text from input and print
 
  storeData="";

  printData(data){
    console.warn(data);
    this.storeData = data;
  }

  Counter = 0 ;
  //Counter
   getCount(val){
     val=='add' ? this.Counter++ : this.Counter--;
   }
}
