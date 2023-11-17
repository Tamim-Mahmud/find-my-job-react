import express from 'express';
import axios from 'axios';
import cors from 'cors';


const app = express();
const port = 3001;
app.use(cors());

app.options('/generate-text', cors());

const OPENAI_API_KEY ='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'; // Replace with your OpenAI API key
app.use(express.json());

app.post('/generate-text', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    res.json(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
