import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <SpaIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            GreenBot
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/analyze"
          >
            Analyze Image
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/chat"
          >
            Chat
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 