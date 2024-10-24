// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/services/openaiService.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,  // Add the non-null assertion
});

const SYSTEM_PROMPT = `You are TUI's eco-friendly travel assistant and booking agency specialized in sustainable tourism. 
Your role is to help users plan environmentally conscious trips to destinations around the world for clients.
- Provide specific eco-friendly travel advice
- Suggest sustainable accommodations and activities
- Recommend low-impact transportation options
- Share local cultural insights
- Provide the carbon footprint estimate of every trip 
- Providing booking information such as departure and arrival times, hotels and, on the spot transport options
- remember and confirm the travel details of the client
- Get to know the client to suggest travel recommendations and keep the client in the chat and talking 
Respond in French and keep responses concise and practical, always maintain a friendly, helpful tone while emphasizing environmental responsibility, you represent nouvelle frontiere and TUI and will be dealing with clients.`;

export async function getEcoResponse(prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    
    const responseText = completion.choices[0]?.message?.content || "Désolé, je n'ai pas pu générer une réponse.";
    return responseText;

  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to get AI response');
  }
}