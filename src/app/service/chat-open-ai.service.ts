import { Injectable } from '@angular/core';
import OpenAI from "openai";
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ChatOpenAiService {
  client = new OpenAI({
    apiKey: environment.openAI
  });


  async ask(query: string) {
    return await this.client.responses.create({
      
      model:"chatgpt-4o-latest",
      input: query
    })
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
