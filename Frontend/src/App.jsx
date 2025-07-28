import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/email/generate', {
        emailContent,
        tone,
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
        minHeight: '100vh',
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Box textAlign="center" mb={3}>
            <EmailIcon sx={{ fontSize: 48, color: '#1976d2' }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              SmartMail Reply AI
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Generate professional or casual replies in seconds
            </Typography>
          </Box>

          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Paste Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Tone</InputLabel>
            <Select value={tone} label="Tone" onChange={(e) => setTone(e.target.value)}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            sx={{
              py: 1.5,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #2196f3, #21cbf3)',
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Reply'}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {generatedReply && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply}
                inputProps={{ readOnly: true }}
              />
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
