import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  topics =['Angular','React','Vue'];
  userModel = new User('mohamed','mohamedeamd@gmail.com',5566666666678,'','evening',true);
}
