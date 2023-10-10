import openAI from 'openai';
import { Api } from './ApiKey';

const openai = new openAI({
   apiKey: Api.OPENAI_API_KEY,
   dangerouslyAllowBrowser: true // This is also the default, can be omitted
});
export const OpenAI = async (prompt) => {
   const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": prompt }],
   });
   return res.choices[0].message
}