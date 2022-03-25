import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snow Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'travel',
      content: 'The Great Swiss Alps!',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking101',
      content: 'Enjoyed bike ride in the countryside.',
    },
  ];
}
