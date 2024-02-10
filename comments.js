// Create web server with Express
const express = require('express');
const app = express();

// Define a route for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Now, if you visit `http://localhost:3000/comments` in your browser, you will see the message "This is the comments page".

## 2.4. Serving static files

You can serve static files using the `express.static` middleware.

Create a new directory named `public` and add an HTML file named `index.html`. Then, add the following code to `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Static Files</title>
</head>
<body>
  <h1>This is the home page</h1>
  <p>Welcome to the home page</p>
</body>
</html>
```

Then, add the following code to `app.js`:

```javascript
// Path: app.js
// Create web server with Express
const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Now, if you visit `http://localhost:3000` in your browser, you will see the content of `index.html`.

## 2.5. URL parameters

You can use URL parameters to pass data from the client to the server.

Add the following code to `app.js`:

```javascript
// Path: app.js
// Create web server with Express
const express = require('express');
const app = express();

// Define a route with URL parameters
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

Now