import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }
  
 

  login(username: string, password: string): Observable <any>{

    this.setToken("abcdefghijklmnopqrstuvwxyz");
    return from(signInWithEmailAndPassword(this.auth, username, password));

  }

  signUp( name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({ user })=> updateProfile(user, {displayName: name})));
  }
  logout(){
    return from(this.auth.signOut());
    localStorage.removeItem("token");
  }
//TOKEN
  setToken(token: string): void {
    localStorage.setItem("token", token);
  }
  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
