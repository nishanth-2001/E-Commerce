import { ERROR_TYPES, ERR_MESSAGE } from "../constant.js";
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
    const newUser = await createNewUser(input);
    const respUser = makeUserResponse(newUser);

    return res.status(201).json(respUser);
  } catch (err) {
    if (err instanceof AppError || err instanceof ServerError) {
      return next(err);
    }
    if (err.code === 11000) {
      const dupIdx = err.message.match(/index\: (.+) dup key/)?.[1];
      if (dupIdx && ERR_MESSAGE.UNIQUE[dupIdx]) {
        return next(
          new AppError(ERR_MESSAGE.UNIQUE[dupIdx].MESSAGE, ERROR_TYPES.CONFLICT)
        );
      }
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
