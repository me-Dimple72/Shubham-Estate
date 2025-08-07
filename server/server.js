// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// // Serve static files from the "public" folder
// app.use(express.static(path.join(__dirname, '../public')));

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html on base URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
