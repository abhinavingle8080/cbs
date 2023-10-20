
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const i18n = require('./i18n/config');
const businessRouter = require('./routs/userRoutes/business.router');

app.use(i18n.init);
app.use(express.json({ limit: '25mb' })); // Limit the response
app.use(bodyParser.json()); // Parse Body In JSON Format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Used CORS for cross-origin and allow-same-origin


app.use("/api/user",businessRouter);
// Entry API or Welcome Route
app.get("/", (_req, res) => {
  res.json({ message: res.__("message") + ` Server is running on port ${PORT}.` });
});

// Listening PORT
const PORT = process.env.PORT || 8011;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
