import { inject, Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai'
import { twoShotPrompt} from '../prompts'
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  model = "gemini-2.0-flash";
  temperature = 0.1
  baseURL = environment.baseURL

  http = inject(HttpClient);

  constructor() { }

  async ask(query: {role: string, parts:{text: string}[]}[]) {
    return await firstValueFrom(this.http.post<{text: string, role: string, token_count: number}>(
      `${this.baseURL}/smart`, {
        content: query
      }
    ))
  }

  async askInWithHistory(query: {role: string, parts:{text: string}[]}[]) {
    debugger
    return await firstValueFrom(this.http.post<{text: string, role: string, token_count: number}>(
      `${this.baseURL}/smart`, {
        content: query
      }
    ))
  }

  // async askStream(query: string) {
  //   return await this.bot.models.generateContentStream({
  //     model: this.model,
  //     contents: query,
  //     config: {
  //       systemInstruction: twoShotPrompt,
  //       temperature: this.temperature
  //     }
  //   })
  // }
}
