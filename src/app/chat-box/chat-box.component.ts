import { Component, computed, input } from '@angular/core';
import { Chat } from '../types/chat';
import { ChatSectionComponent } from '../chat-section/chat-section.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-chat-box',
  imports: [ChatSectionComponent, InputComponent],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  chats = input.required<Chat[]>();
  thinking = input<boolean>(false)
}
