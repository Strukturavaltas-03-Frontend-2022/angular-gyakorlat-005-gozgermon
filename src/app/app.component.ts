import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';
  userList: User[] = this.userService.list;

  /**
   * FELADAT!
   * Hozd létre az alábbi változót.
   * @var phrase {string} - a keresőkifejezés
   */
   phrase: string= "";

   currentUser:User=new User()

   test_user:User={
    id: 25,
    name: 'Steward Langstone',
    email: 'slangstoneo@home.pl',
    address: '815 Erie Plaza',
    active: true
  }


  constructor(
    private userService: UserService,
  ) {}

  onSelectUser(user:User):void{
    this.currentUser=user;
  }

  onUpdateUser(user:User):void{
    this.userService.updateUser(user);
  }
  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
  }

  /**
   * FELADAT!
   * Hozz létre egy új metódust, amely kezeli a keresőkifejezést.
   * Neve: onChangePhrase
   * Működése: a this.phrase értékét beállítja az
   *  (event.target as HTMLInputElement) értékére.
   * @param event {Event} - az esemény
   * @returns {void}
   */
   onChangePhrase(event:Event):void{
    this.phrase = (event.target as HTMLInputElement).value
   }
  

}
