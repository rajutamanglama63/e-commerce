const app = require("./app"); // the actual Express application
const config = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

// const PORT = process.env.PORT || 3001;

const start = async () => {
  await connectToDatabase();
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
};

start();
