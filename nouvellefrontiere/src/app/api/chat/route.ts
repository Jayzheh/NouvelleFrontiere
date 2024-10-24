// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/chat/route.ts
import { NextResponse } from 'next/server';
import { getEcoResponse } from '@/services/openaiService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await getEcoResponse(message);
    return NextResponse.json({ response });
    
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}