const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors')
const fs = require('fs');

const app = express();
app.use(cors())
const PORT = 6008;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load users from the JSON file
let users = [];
try {
  const data = fs.readFileSync('user.json', 'utf8');
  users = JSON.parse(data);
} catch (err) {
  console.error('Error reading users.json:', err);
}

// Signup route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.find(user => user.username === username)) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  // Add the new user to the array
  const newUser = { username, password };
  users.push(newUser);

  // Save the updated users array to the JSON file
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');

  res.json({ message: 'User signed up successfully'});
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user with the given username
  const user = users.find(user => user.username === username);

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
