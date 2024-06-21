import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    'You have won a prize!',
    'Better luck next time.',
    'You are a star!',
    'Congratulations!',
    'Try again!'
  ];

  constructor() { }

  getRandomMessage(): string {
    const index = Math.floor(Math.random() * this.messages.length);
    return this.messages[index];
  }
}

