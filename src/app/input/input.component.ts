import { Component, ElementRef, inject, Signal, viewChild } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  chatService = inject(ChatService)
  message = viewChild("inputbox")

  onSend(inputValue: string) {
    this.chatService.userInput(inputValue);
    (this.message() as ElementRef).nativeElement.value = ""
  }
}
