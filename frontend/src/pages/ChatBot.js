import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
  Alert,
  Fade,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { sendMessage } from '../services/chatService';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setLoading(true);
    setError(null);

    try {
      const response = await sendMessage(userMessage, language);
      setMessages(prev => [...prev, { text: response.response, sender: 'bot' }]);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setMessages(prev => [...prev, {
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Plant Care Chat Assistant
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Ask any questions about plant care and get instant advice
        </Typography>

        <FormControl sx={{ minWidth: 120, mb: 2 }}>
          <InputLabel>Language</InputLabel>
          <Select
            value={language}
            label="Language"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="de">German</MenuItem>
            <MenuItem value="it">Italian</MenuItem>
          </Select>
        </FormControl>

        {error && (
          <Fade in={true}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          </Fade>
        )}

        <Paper
          elevation={3}
          sx={{
            height: '60vh',
            overflow: 'auto',
            p: 2,
            mb: 2,
            backgroundColor: 'background.default',
            borderRadius: 2,
          }}
        >
          <List>
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      maxWidth: '70%',
                      backgroundColor: message.sender === 'user' ? 'primary.main' : 'grey.100',
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                      borderRadius: 2,
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Paper>
                </ListItem>
                {index < messages.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            {loading && (
              <Fade in={true}>
                <ListItem>
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 2, 
                      backgroundColor: 'grey.100',
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CircularProgress size={20} />
                      <ListItemText primary="Thinking..." />
                    </Box>
                  </Paper>
                </ListItem>
              </Fade>
            )}
            <div ref={messagesEndRef} />
          </List>
        </Paper>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            disabled={loading || !input.trim()}
            endIcon={<SendIcon />}
            sx={{
              borderRadius: 2,
              minWidth: '100px',
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ChatBot; 