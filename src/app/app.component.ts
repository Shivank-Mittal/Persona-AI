import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatService } from './service/chat.service';
import { HealthcheckService } from './service/healthcheck.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lets-chat';
  chatService = inject(ChatService);
  chats = this.chatService.chat;
  thinking = this.chatService.isThinking

  heathCheckService = inject(HealthcheckService);

}
