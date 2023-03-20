import { NextFunction, Request } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { authorization } = req.headers;
  const [, token] = String(authorization).split(' ');

  if (!token) {
    throw new AppError('Token is missing.', 401);
  }

  try {
    verify(token, String(process.env.TOKEN_SECRET)) as JwtPayload;
    next();
  } catch (e) {
    throw new AppError('Invalid token.', 403);
  }
}
