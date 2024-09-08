import React, { useState, useEffect, useRef } from 'react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

enum ConversationStep {
  Welcome,
  OfferHelp,
  AskHelp,
}

function classifyUserIntent(userInput: string, conversationStep: ConversationStep): Promise<{ response: string; newStep?: ConversationStep }> {
  return new Promise((resolve, reject) => {
    switch (conversationStep) {
      case ConversationStep.Welcome:
        resolve({ response: 'Hi there! Welcome!' });
        break;
      case ConversationStep.OfferHelp:
        resolve({ response: 'I can help you with your booking.' });
        break;
      case ConversationStep.AskHelp:
        if (userInput.toLowerCase().includes('yes')) {
          resolve({ response: 'Great! How can I assist you?', newStep: ConversationStep.OfferHelp });
        } else {
          resolve({ response: 'Okay, feel free to navigate the website.' });
        }
        break;
      default:
        resolve({ response: 'I\'m sorry, I didn\'t understand your request.' });
    }
  });
}

const BotResponseGenerator: React.FC<{ userInput: string; conversationStep: ConversationStep; setConversationStep: (step: ConversationStep) => void; addMessage: (message: Message) => void }> = ({ userInput, conversationStep, setConversationStep, addMessage }) => {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const prevConversationStep = useRef<ConversationStep>(conversationStep);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const { response: botResponse, newStep } = await classifyUserIntent(userInput, conversationStep);
        setResponse(botResponse);
        addMessage({ sender: 'bot', text: botResponse });
        if (newStep) {
          setConversationStep(newStep);
        }
      } catch (err) {
        setError('An error occurred while generating the bot response.');
      }
    };

    // Check if the userInput and conversationStep have changed
    if (userInput && conversationStep !== prevConversationStep.current) {
      getResponse();
      prevConversationStep.current = conversationStep;
    }
  }, [userInput, conversationStep, addMessage]);

  return (
    <div>
      {error ? (
        <div>Server error: {error}</div>
      ) : !response ? (
        <div>Loading...</div>
      ) : (
        <div>{response}</div>
      )}
    </div>
  );
};

export { BotResponseGenerator, classifyUserIntent as generateBotResponse };