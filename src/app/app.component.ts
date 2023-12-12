import { Component } from '@angular/core';
import {Validators, NgForm , FormControl, FormGroup,FormControlName  } from '@angular/forms';
import { UserDataService } from './service/user-data.service';
import { ProductsService } from './service/products.service';
import { DataType } from './userinterface';
// interface DataType{
//   name : string,
//   age : number,
//   email:any,
//   indian: boolean
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Codder';
  datauserdata:any;
  productts:any ;
  constructor(private datauser:UserDataService,private products:ProductsService){
   console.warn("User Data : " , datauser.user());
   products.products().subscribe((data)=>{
    console.warn(data);
    this.productts= data;
   })
   this.datauserdata = datauser.user();
  }
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
  
  //angular Material
  hidden = false;
  
    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
  
    // ToDo list 
  
  
    list : any[] = [];
  
    addList(value : string){
    console.log(value);
       this.list.push({id:this.list.length+1, name:value});
       console.log(this.list);
    }
  
    deleteStudent(id : number){
          console.log(id);
          this.list = this.list.filter(item  => item.id !==id);
    }
  
    //Parent to child 
  
    dataNumber = 100 ;
    list2 = ["radhika", "aman","prachik","anshull","akash","radhika", "aman","prachi","anshul","akash",]
    dataName = "suhag";
    changeNumber(){
      this.dataNumber = Math.floor(Math.random()*100);
      this.dataName  = this.list2[Math.floor(Math.random()*10)]
    }
  
    userList = [
      {name : "suhag", email : "suahg@gmail.com"},
    {name : "aman", email : "aman@gmail.com"},
    {name : "anshul", email : "anshul@gmail.com"},
    {name : "prachi", email : "prachi@gmail.com"}
  ]
  
  //child to parent
  
  data = "suhag";
  updateData(item : string){
  console.log(item);
  this.data = item;
  }
  
  //Two way binding
  
  showData:string;
  
  //template reference variable
  
  functionCall(data:any){
  console.log(data);
  }
  
  //basic types of typescript 
  
  a: number =8;
  b: number[] =[3,3,4];
  
  c : {name :string, contact : number}={name : "suhag", contact : 65565656464};
  
  takeData(item:string){
    console.log(item);
  }
  
  //basic of Pipes in angular
  
  pipe = "I am from pipe";
  date = new Date();
  
  //custom pipes 
  rupees = 1 ;
  
  //Template forms
  
  userLogin(item :any){
  console.log(item);
  }
  
  //Reactive Form 
  loginUserForm= new FormGroup({
    user : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginUser(){
    console.log(this.loginUserForm.value);
  }
  
  get user()
  {
    return this.loginUserForm.get('user');
  }
  get password()
  {
    return this.loginUserForm.get('password');
  }


  //Model
  getUser(){
    const data:DataType = {
      name  : "suhag Mohinkar",
      age : 23,
      email : "suhag@gmail.com",
      indian: true
    }
    return data;
  }
}
