// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/chat/route.ts
import { NextResponse } from 'next/server';
import { getEcoResponse, resetConversation, getConversationHistory } from '@/services/openaiService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, action } = body;

    // Handle conversation reset
    if (action === 'reset') {
      resetConversation();
      return NextResponse.json({ 
        message: 'Conversation réinitialisée' 
      });
    }

    // Handle get history
    if (action === 'getHistory') {
      const history = getConversationHistory();
      return NextResponse.json({ history });
    }

    // Handle regular message
    if (!message) {
      return NextResponse.json(
        { error: 'Message requis' },
        { status: 400 }
      );
    }

    const response = await getEcoResponse(message);
    
    return NextResponse.json({ 
      response,
      history: getConversationHistory()
    });
    
  } catch (error) {
    console.error('Chat error:', error);
    
    let errorMessage = 'Erreur de traitement de la demande';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Méthode non autorisée' },
    { status: 405 }
  );
}