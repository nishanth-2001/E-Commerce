import { ERROR_TYPES } from "../constant.js";
import { AppError, ServerError } from "../helpers/errors.js";
import { createNewUser, makeUserResponse } from "../helpers/user.js";

/**
 * @param {import("express").Request<{}, {}, import("../schemas/register").RegistrationInputType, {}>} req - Express Request
 * @param {import("express").Response} _res - Express Response
 * @param {import("express").NextFunction} next - Next Function
 */
const registerHandler = async (req, res, next) => {
  try {
    const input = req.body;
    await createNewUser(input);

    return res.status(201).send();
  } catch (err) {
    if (err instanceof AppError || err instanceof ServerError) {
      return next(err);
    }
    if (err.code === 11000) {
      const dupIdx = err.message.match(/index\: (.+) dup key/)?.[1];
      return next(new AppError(dupIdx, ERROR_TYPES.BAD_REQUEST));
    }
    return next(new ServerError(err, err.message));
  }
};

const loginHandler = (req, res, next) => {
  const input = req.body;
  res.json({
    resister: true,
  });
};

export { registerHandler, loginHandler };
