import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(200).json({ status: false, message: errors.array()[0]?.msg });
  }

  next();
}

const validate = {
  register: [
    body('name').notEmpty().withMessage('name not exists.'),
    body('email').isEmail().withMessage('email type error.'),
    body('address').notEmpty().withMessage('address not exists.'),
    middleware,
  ],

  login: [
    body('address').notEmpty().withMessage('address not exists.'),
    middleware,
  ],
}

export default validate