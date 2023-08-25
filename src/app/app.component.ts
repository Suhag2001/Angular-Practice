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

   //Property Binding
   name = "Suhag Mohinkar";
   disable= false;

  //If else code
  show = true;
 getFun(){
  if(this.show ==true){
    this.show = false;
  }else{
    this.show = true;
  }
 }


 //Else Codition
 dudeColor ="red";

 getColors(val){
  if(val=='red'){
    this.dudeColor="red";
  }else if(val=='green'){
    this.dudeColor="green"
  }else if(val=='yellow'){
    this.dudeColor="yellow";
  }else if(val =='orange'){
    this.dudeColor="orange";
  }
 }

 //switch case

 Color = "red" ;
 getColorsWithSwitch(val){
  switch(val){
    case "red":{
      this.Color="red";
      break;
    }
    case "green":{
      this.Color="green";
      break;
    }
    case "blue":{
      this.Color="blue";
      break;
    }
    case "peru":{
      this.Color="peru";
      break;
    } 
  }
 }

//Looping in Angular

users=["aman","prathmesh","swati","sakshi"];

usersData=[
  {
    name:"pallavi0",
    email:"pallavi@gmail.com0",
    phone:"65986565245"
  },
  {
    name:"aman",
    email:"aman@gmail.com0",
    phone:"5656454654"
  }
,
{
  name:"sakshi",
  email:"sakshi@gmail.com0",
  phone:"88986565644"
},
{
  name:"prachi",
  email:"parachi@gmail.com0",
  phone:"55656565654"
},
{
  name:"soman",
  email:"somam@gmail.com0",
  phone:"5656565665"
}
]

}
