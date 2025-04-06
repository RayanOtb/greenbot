import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
  Alert,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Fade,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import { analyzeImage } from '../services/imageService';

function ImageAnalysis() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      setFile(acceptedFiles[0]);
      setResult(null);
      setError(null);
    }
  });

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const response = await analyzeImage(file);
      setResult(response);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Plant Disease Analysis
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Upload a photo of your plant to get instant diagnosis and recommendations
        </Typography>

        <Paper
          {...getRootProps()}
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            textAlign: 'center',
            backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
            border: '2px dashed',
            borderColor: 'primary.main',
            cursor: 'pointer',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography>
            {isDragActive
              ? 'Drop the image here'
              : 'Drag and drop an image here, or click to select'}
          </Typography>
          {file && (
            <Typography variant="body2" sx={{ mt: 2 }}>
              Selected file: {file.name}
            </Typography>
          )}
        </Paper>

        {file && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAnalyze}
              disabled={loading}
              sx={{
                borderRadius: 2,
                minWidth: '200px',
              }}
            >
              {loading ? 'Analyzing...' : 'Analyze Image'}
            </Button>
          </Box>
        )}

        {loading && (
          <Fade in={true}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <CircularProgress />
            </Box>
          </Fade>
        )}

        {error && (
          <Fade in={true}>
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          </Fade>
        )}

        {result && (
          <Fade in={true}>
            <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Analysis Results
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    {result.confidence > 0.7 ? (
                      <CheckCircleIcon color="success" />
                    ) : (
                      <WarningIcon color="warning" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary="Disease Detected"
                    secondary={result.disease}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Confidence Level"
                    secondary={`${(result.confidence * 100).toFixed(2)}%`}
                  />
                </ListItem>
              </List>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Recommendations:
              </Typography>
              <List>
                {result.recommendations.map((rec, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={rec} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Fade>
        )}
      </Box>
    </Container>
  );
}

export default ImageAnalysis; 