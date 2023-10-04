import { handleApiErr } from "../helpers/errors.js";

import Users from "../models/User.js";

const userHandler = async (req, res, next) => {
  try {
    const newUser = await createNewUser(input);
    const respUser = makeUserResponse(newUser);
    const users = await Users.find();
    // return res.status(201).json({ users });

    return res.status(201).json({ users: users });
  } catch (error) {
    return handleApiErr(error, next);
  }
};

export { userHandler };
