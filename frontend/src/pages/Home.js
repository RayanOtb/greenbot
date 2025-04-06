import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ChatIcon from '@mui/icons-material/Chat';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to GreenBot
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your intelligent plant care assistant
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <CameraAltIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Image Analysis
              </Typography>
              <Typography color="text.secondary">
                Upload a photo of your plant and get instant diagnosis of any diseases or issues.
                Our AI-powered system will analyze the image and provide detailed recommendations.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={RouterLink}
                to="/analyze"
                variant="contained"
                color="primary"
              >
                Try Image Analysis
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <ChatIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Chat Assistant
              </Typography>
              <Typography color="text.secondary">
                Get personalized advice and solutions for your plant care questions.
                Our multilingual chatbot is available 24/7 to help you with any plant-related queries.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={RouterLink}
                to="/chat"
                variant="contained"
                color="primary"
              >
                Start Chat
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home; 