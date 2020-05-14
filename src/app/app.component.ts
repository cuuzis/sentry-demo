import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  smileyNames = ['Grinning', 'Beaming ', 'Rolling', 'Winking'];
  displayedSmiley: string;

  // http://www.unicode.org/emoji/charts/full-emoji-list.html 😉
  smileyDetails = [
    {emoji: '😃'},
    {emoji: '😁'},
    {emoji: '🤣'},
    ];


  showEmoji(index: number) {
    this.displayedSmiley = this.smileyDetails[index].emoji;
  }
}
