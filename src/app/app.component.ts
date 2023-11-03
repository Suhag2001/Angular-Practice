import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
 dudeColor ="green";

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

 Color = "green" ;
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

//Nested for loop

Users=[
  {
    name:"pallavi0",
    email:"pallavi@gmail.com0",
    phone:"65986565245",
    userAccounts:["facebook", "twitter", "paypal"]
  },
  {
    name:"aman",
    email:"aman@gmail.com0",
    phone:"5656454654",
    userAccounts:["facebook", "twitter", "paypal"]
  }
,
{
  name:"sakshi",
  email:"sakshi@gmail.com0",
  phone:"88986565644",
  userAccounts:["instagram", "twitter", "paypal"]
},
{
  name:"prachi",
  email:"parachi@gmail.com0",
  phone:"55656565654",
  userAccounts:["telegram", "twitter", "paypal"]
},
{
  name:"soman",
  email:"somam@gmail.com0",
  phone:"5656565665",
  userAccounts:["linkedin", "twitter", "paypal"]
}
]

//style binding
color="blue";
bgColor="yellow";

Onclick(){
  this.color="white";
  this.bgColor="blue";
}

//simple form 
userDisplay: boolean= false;
userData: any={};
getUserData(data:NgForm){
this.userData = data;
console.log(data);
this.userDisplay = true;
}

//toggle element 
display : boolean = false;
toggle(){
   this.display = !this.display;
}





}
