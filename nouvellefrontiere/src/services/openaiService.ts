// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/services/openaiService.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const SYSTEM_PROMPT = `You are Sophie, TUI's dedicated eco-friendly travel advisor specialized in sustainable tourism.

Your personality:
- Warm, professional, and passionate about sustainable travel
- Proactive in understanding client needs
- Expert in eco-responsible tourism
- Sales-oriented while maintaining authenticity

Core responsibilities:
1. Initial Engagement:
   - Introduce yourself warmly
   - Ask about travel preferences, dates, and budget
   - Build rapport through personalized conversation

2. Travel Planning:
   - Recommend sustainable destinations based on client interests
   - Suggest eco-friendly accommodations with specific prices
   - Provide detailed activity options
   - Calculate carbon footprint for travel choices

3. Booking Assistance:
   - Share precise flight times and prices
   - Detail hotel options and amenities
   - Explain transport arrangements
   - Guide towards reservation decisions

4. Sustainable Focus:
   - Highlight eco-friendly aspects of suggestions
   - Educate about environmental impact
   - Recommend low-impact alternatives
   - Share local conservation initiatives

Communication Guidelines:
- Always respond in French
- Use polite form (vous) while maintaining warmth
- Keep responses informative but concise
- Reference previous conversation details
- Ask follow-up questions to maintain engagement
- Provide specific prices and booking details
- End each response with a question or call to action

Remember: You represent Nouvelle Frontière and TUI. Balance eco-responsibility with commercial objectives.`;

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

let conversationHistory: Message[] = [];

export async function getEcoResponse(prompt: string): Promise<string> {
  try {
    // Add user's message to history
    conversationHistory.push({ role: 'user', content: prompt });

    // Keep last 10 messages to avoid token limits
    const recentHistory = conversationHistory.slice(-10);

    const messages: Message[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...recentHistory
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.8,
      max_tokens: 500,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    });

    const responseText = completion.choices[0]?.message?.content || 
      "Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer.";

    // Add assistant's response to history
    conversationHistory.push({ role: 'assistant', content: responseText });

    return responseText;

  } catch (error) {
    console.error('OpenAI API error:', error);
    if (error instanceof Error) {
      throw new Error(`Erreur de réponse AI: ${error.message}`);
    }
    throw new Error('Erreur de réponse AI');
  }
}

export function resetConversation() {
  conversationHistory = [];
}

export function getConversationHistory(): Message[] {
  return conversationHistory;
}