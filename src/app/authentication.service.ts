import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;

  constructor(public afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
   }




SignOut() {
  return this.afAuth.signOut().then(() => {
    window.alert('Logged out!');
  });
}



}