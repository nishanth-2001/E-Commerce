const getAllUsers = async () => {
  try {
    const userSchema = await userSchema.find();
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export default getAllUsers;
