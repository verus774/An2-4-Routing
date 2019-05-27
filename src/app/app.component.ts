import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public messagesService: MessagesService,
    private router: Router
  ) { }

  onActivate($event) {
    console.log('Activated Component', $event);
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }

  onDisplayMessages(): void {
    this.router.navigate([{ outlets: { messages: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }

}
