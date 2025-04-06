import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const sendMessage = async (message, language = 'en') => {
  try {
    const response = await axios.post(`${API_URL}/chat`, {
      message,
      language
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}; 