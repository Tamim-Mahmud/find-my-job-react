import React, { useState } from 'react';

const ChatComponent = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (!inputMessage) return;

    // Add user's message to the chat history
    setChatHistory([...chatHistory, { text: inputMessage, sender: 'user' }]);

    try {
      // Make a request to the ChatGPT API
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          prompt: inputMessage,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      // Extract and add ChatGPT's response to the chat history
      const responseData = await response.json();
      const chatGptResponse = responseData.choices[0].text;
      setChatHistory([...chatHistory, { text: chatGptResponse, sender: 'chatbot' }]);
    } catch (error) {
      console.error('Error making ChatGPT request:', error);
    }

    // Clear the input field
    setInputMessage('');
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {chatHistory.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <strong>{message.sender === 'user' ? 'You' : 'Chatbot'}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '80%', padding: '5px' }}
        />
        <button onClick={sendMessage} style={{ marginLeft: '10px', padding: '5px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
