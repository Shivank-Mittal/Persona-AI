import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai'
import { twoShotPrompt} from '../prompts'

@Injectable({
  providedIn: 'root'
})
export class BotService {

  geminiKey = "AIzaSyCgi4UT9risn5UYU9mcY0SxbLoZlWx6mrw";
  bot = new GoogleGenAI({apiKey: this.geminiKey});
  model = "gemini-2.0-flash";

  constructor() { }

  async ask(query: string) {
    return await this.bot.models.generateContent({
      model: this.model,
      contents: query,
      config: {
        systemInstruction: twoShotPrompt
      }
    })
  }

  async askStream(query: string) {
    return await this.bot.models.generateContentStream({
      model: this.model,
      contents: query,
      config: {
        systemInstruction: twoShotPrompt
      }
    })
  }
}
