import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import errorHandler from "./middleware/errorHandler";

const app: Application = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Error Handling (should be the last middleware)
app.use(errorHandler);

export default app;
