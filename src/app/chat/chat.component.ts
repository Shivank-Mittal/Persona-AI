import { Component, input } from '@angular/core';


@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  host: {
    '[style.border-bottom-right-radius]': 'direction() === "left" ? "16px" : "0px"',
    '[style.border-bottom-left-radius]': 'direction() === "right" ? "16px" : "0px"'
  }
})
export class ChatComponent {
  message = input.required<string>()
  direction = input<'left' | 'right'>('left')
}
