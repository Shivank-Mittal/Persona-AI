import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai'
import { twoShotPrompt} from '../prompts'
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  geminiKey = environment.geminiKey
  bot = new GoogleGenAI({apiKey: this.geminiKey});
  model = "gemini-2.0-flash";
  temperature = 0.1

  constructor() { }

  async ask(query: string) {
    return await this.bot.models.generateContent({
      model: this.model,
      contents: query,
      config: {
        systemInstruction: twoShotPrompt,
        temperature: this.temperature
      }
    })
  }

  async askStream(query: string) {
    return await this.bot.models.generateContentStream({
      model: this.model,
      contents: query,
      config: {
        systemInstruction: twoShotPrompt,
        temperature: this.temperature
      }
    })
  }
}
