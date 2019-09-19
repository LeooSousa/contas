import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "@angular/fire/auth"
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState$: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
   }

   get isAuthenticated(): 
   Observable<boolean> {
    return this.authState$.pipe(map(user => user 
      !== null));
   }

   loginWhithEmail({email, password }): 
   Promise<auth.UserCredential> {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password);
   }

   logout(): Promise<void>{
    return this.afAuth.auth.signOut();
   }
}
