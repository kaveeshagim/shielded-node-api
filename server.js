const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const rateLimiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");
const sanitizeInput = require("./middleware/sanitizeInput");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(sanitizeInput);
app.use(cors());

// rate limiter
app.use(rateLimiter);

// Routes
app.use("/api/auth", authRoutes);

// Error handler fallback
app.use(errorHandler);

// Start server after DB is connected
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
