import { Component } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  userList:any;
constructor(private userData: UserDataService){
this.userList = userData.user();
}
}
