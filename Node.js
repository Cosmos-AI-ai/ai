const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/ai', async (req, res) => {
  const userQuery = req.body.query;

  // Example: Simple Wikipedia Scraper
  const searchUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(userQuery)}`;
  try {
    const { data } = await axios.get(searchUrl);
    res.json({ response: `I found some info: ${data.substring(0, 100)}...` });
  } catch (err) {
    res.json({ response: "Sorry, I couldn't find anything relevant." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
