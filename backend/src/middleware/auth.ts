import { Request, Response, NextFunction } from "express";

// Extend Express Request object to include `user`
declare global {
  namespace Express {
    interface Request {
      user?: { id: number; name: string };
    }
  }
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  // Mock authenticaton logic
  const token = req.headers.authorization;

  if (!token) {
    const error: any = new Error("Unauthorized");
    error.statusCode = 401;
    return next(error);
  }

  // Verify token...
  req.user = { id: 1, name: "John Doe" }; // Set user info after successful validation
  next();
};

export default auth;
