import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/uset';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
  user: UserInterface={
    name:'',
    email:'',
  };

  public providerId: string ='null';
  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.user.name = user.displayName;
        this.user.email = user.email;
        this.providerId = user.providerData[0].providerId;
        console.log('User', this.providerId);
      }
    })
  }

}
