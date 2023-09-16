import { createNewUser, makeUserResponse } from "../helpers/user.js";

/**
 * @param {import("express").Request<{}, {}, import("../schemas/register").RegistrationInputType, {}>} req - Express Request
 * @param {import("express").Response} _res - Express Response
 * @param {import("express").NextFunction} next - Next Function
 */
const registerHandler = async (req, res, next) => {
  const input = req.body;
  const userData = await createNewUser(input);
  const responseUser = makeUserResponse(userData);

  res.status(201).json({ user: responseUser });
};

const loginHandler = (req, res, next) => {
  const input = req.body;
  res.json({
    resister: true,
  });
};

export { registerHandler, loginHandler };
