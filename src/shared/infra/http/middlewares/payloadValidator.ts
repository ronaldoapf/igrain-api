import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

import { AppError } from '@shared/errors/AppError';

export default function payloadValidator(validationSchema: z.ZodTypeAny) {
  return (
    request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) => {
    const { body } = request;
    const result = validationSchema.safeParse(body);
    if (!result.success) {
      const { issues } = result.error;
      const [{ path, message }] = issues;
      throw new AppError(
        `Validation error on field ${path[0]}: ${message}`,
        400
      );
    }

    return next();
  };
}
