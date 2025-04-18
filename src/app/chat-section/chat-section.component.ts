import { Component, computed, inject, input } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { Chat, ROLE } from '../types/chat';
import { HealthcheckService } from '../service/healthcheck.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-section',
  imports: [ChatComponent, CommonModule],
  templateUrl: './chat-section.component.html',
  styleUrl: './chat-section.component.css',
  host: {
    '[style.flex-direction]': 'direction() === "right" ?  "row-reverse" : "row"'
  }
})
export class ChatSectionComponent {
  role = input.required<Omit<ROLE, "SYSTEM">>();
  message = input.required<string>();
  thinking = input<boolean | undefined>(false)
  direction = computed(() => this.role() === ROLE.USER ? "right": "left" )
  avatar = computed(() => this.role() === ROLE.USER ? "/assets/user.png": "/assets/HiteshSir.png" )

  healthcheck = inject(HealthcheckService);
  status = this.healthcheck.isOnline
}
