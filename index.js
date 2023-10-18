const express = require('express');
const app = express();

// Define your routes and controllers here

const PORT = process.env.PORT || 8011;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
