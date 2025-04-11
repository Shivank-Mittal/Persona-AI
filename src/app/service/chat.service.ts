import { computed, effect, inject, Injectable, Signal, signal } from '@angular/core';
import { Chat, ROLE } from '../types/chat';
import { BotService } from './bot.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  askingService  = inject(BotService)

  chat = signal<Chat[]>([
    {role: ROLE.SYSTEM, content: "How may i help you"},
  ])

  lastMessage = computed(() => this.chat()[this.chat().length - 1])
  isThinking:Signal<boolean> = computed(() => { 
    return this.chat()[this.chat().length - 1].thinking || false
  })

  constructor() {
    effect(() => {
      if(this.lastMessage().role === ROLE.USER) {
        this.findResponse(this.lastMessage().content);
      }
    })
   }

  userInput(content: string) {
    this.chat.update((v) => [...v, {role: ROLE.USER , content}])
  }

  async findResponse(query: string) {
    const role = ROLE.SYSTEM
    this.AddChat('', role, true)
    const response = await this.askingService.ask(query)
    this.updateChat(response.text || "Sorry no answer is found")
  }

  async findResponseStream(query: string) {
    const role = ROLE.SYSTEM
    this.AddChat('', role, true)
    const response = await this.askingService.askStream(query)
    this.chat.update(v => [...v.slice(0, v.length - 1
    )])
    for await (const res of response) {
      this.AddChat(res.text || "Sorry no answer is found", role, false)
    }
  }

  AddChat(content: string, role: ROLE, thinking?: boolean) {
    this.chat.update((v) => [...v, {role , content, thinking}])
  }

  updateChat(content: string) {
    this.chat.update(v =>  {
      const lastChat = v[v.length - 1]
      lastChat.content = content;
      lastChat.thinking = false;
      return [...v]
    })
  }
}
