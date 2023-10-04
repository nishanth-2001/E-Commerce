import { ERROR_TYPES, ERR_MESSAGE } from "../constants/index.js";
import { AppError, ServerError, handleApiErr } from "../helpers/errors.js";
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

    return res.status(201).json({ user: respUser });
  } catch (err) {
    return handleApiErr(err, next);
  }
};

const loginHandler = async (req, res, next) => {
  try {
    const input = req.body;
    const newUser = await createNewUser(input);
    const respUser = makeUserResponse(newUser);

    return res.status(201).json({ user: respUser });
  } catch (err) {
    return handleApiErr(err, next);
  }
};

export { registerHandler, loginHandler };
