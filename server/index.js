const app = require("./app"); // the actual Express application
const config = require("./utils/config");

// const PORT = process.env.PORT || 3001;

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
